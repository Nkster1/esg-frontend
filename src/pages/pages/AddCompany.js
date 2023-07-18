import {Helmet} from 'react-helmet-async';
// @mui
import {styled} from '@mui/material/styles';
import {
    Container, Typography, Button, Grow, Stack, TextField,
    FormLabel, NativeSelect, InputLabel, Grid, LinearProgress
} from '@mui/material';

// react
import {useState} from 'react';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
// sections
import TopBar from './TopBar'
import {useCompanyDataHook} from "../hooks/useCompanyData";
import ESGResult from "./DisplayESGResults";

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function AddCompany() {
    const mdUp = useResponsive('up', 'md');
    const [isLoading, setIsLoading] = useState(false);
    const [isEsgReportView, setIsEsgReportView] = useState(false)

    const {
        legalName, setLegalName,
        ownership, setOwnership,
        legalForm, setLegalForm,
        location, setLocation,
        sector, setSector,
        activities, setActivities,
        products, setProducts,
        markets, setMarkets,
        supplyChain, setSupplyChain,
        numEmployees, setNumEmployees,
        response,
        getCompanyData,
        submitData
    } = useCompanyDataHook();

    // error states
    const [marketsError, setMarketsError] = useState("");
    const [productsError, setProductsError] = useState("");
    const [supplyChainError, setSupplyChainError] = useState("");
    const [activitiesError, setActivitiesError] = useState("");
    const [legalNameError, setLegalNameError] = useState("");
    const [ownershipError, setOwnershipError] = useState("");
    const [legalFormError, setLegalFormError] = useState("");
    const [numEmployeesError, setNumEmployeesError] = useState("");
    const validateLength = (value, minLength) => {
        return value.length >= minLength;
    }
    const validateNumberRange = (value, min, max) => {
        const numValue = Number(value);
        if (Number.isNaN(numValue)) {
            return false;
        }
        return numValue >= min && numValue <= max;

    }

    const handleNumEmployeesChange = (value) => {
        if (!validateNumberRange(value, 1, 100000)) {
            setNumEmployeesError(`Input should be a number between 1 and 100000.`);
        } else {
            setNumEmployeesError("");
        }
        setNumEmployees(value);
    }

    const handleInputChange = (setter, errorSetter, minLength, value) => {
        if (!validateLength(value, minLength)) {
            errorSetter(`Input should be at least ${minLength} characters long.`);
        } else {
            errorSetter("");
        }
        setter(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        // Substitute the below promise with your form submission logic
        await submitData();
        setIsEsgReportView(true);
        setIsLoading(false);
    };

    const pages = Array(2);


    pages[0] = <Stack spacing={2} width={512}>
        <h2> Company information </h2>
        <TextField
            error={!!legalNameError}
            helperText={legalNameError}
            name="legalName"
            label="Legal name"
            value={legalName}
            onChange={e => handleInputChange(setLegalName, setLegalNameError, 3, e.target.value)}/>

        <TextField
            error={!!ownershipError}
            helperText={ownershipError}
            name="ownership"
            label="Company Ownership"
            value={ownership}
            onChange={e => handleInputChange(setOwnership, setOwnershipError, 3, e.target.value)}/>

        <TextField
            error={!!legalFormError}
            helperText={legalFormError}
            name="legalForm"
            label="Legal Form"
            value={legalForm}
            onChange={e => handleInputChange(setLegalForm, setLegalFormError, 3, e.target.value)}/>
        <TextField
            error={!!numEmployeesError}
            helperText={numEmployeesError}
            name="numEmployees"
            label="Number of Employees"
            value={numEmployees}
            onChange={e => handleNumEmployeesChange(e.target.value)}/>
        <Stack spacing={0}>
            <InputLabel> Country </InputLabel>
            <NativeSelect value={location} onChange={e => setLocation(e.target.value)}>
                <option> Romania</option>
                <option> Germany</option>
                <option> Switzerland</option>
                <option> Austria</option>
                <option> USA</option>
                <option> China</option>
                <option> Taiwan</option>
                <option> India</option>

            </NativeSelect>
        </Stack>
        <Stack spacing={0}>
            <InputLabel> Select the Industry/Sector you operate in </InputLabel>
            <NativeSelect value={sector} onChange={e => setSector(e.target.value)}>
                <option> Oil and Gas</option>
                <option> Agriculture</option>
                <option> Aquaculture</option>
                <option> Fishing</option>
                <option> Coal</option>
            </NativeSelect>
        </Stack>

        {/* Assuming activities field for Focus Area */}
    </Stack>;

    pages[1] = <Stack spacing={2} width={512}>
        <h2> Activities, Products and Markets </h2>
        <TextField
            error={!!marketsError}
            helperText={marketsError}
            name="markets"
            label="Describe the Markets you operate in"
            value={markets}
            onChange={e => handleInputChange(setMarkets, setMarketsError, 10, e.target.value)}/>

        <TextField
            error={!!productsError}
            name="products"
            label="Describe the products you produce, E.g.: We produce a critical component for "
            helperText={productsError}
            multiline minRows={3} value={products}
            onChange={e => handleInputChange(setProducts, setProductsError, 20, e.target.value)}/>

        <TextField
            error={!!supplyChainError}
            helperText={supplyChainError}
            name="supplyChain"
            label="Describe your Supply Chain"
            value={supplyChain} multiline minRows={5}
            onChange={e => handleInputChange(setSupplyChain, setSupplyChainError, 40, e.target.value)}/>

        <TextField
            error={!!activitiesError}
            helperText={activitiesError}
            name="activities"
            label="Describe your general operation"
            multiline minRows={5}
            value={activities}
            onChange={e => handleInputChange(setActivities, setActivitiesError, 40, e.target.value)}/>
    </Stack>;

    const [currentPage, setCurrentPage] = useState(0);
    const [fade, setFade] = useState(true);
    const triggerFade = async (inc) => {
        setFade(false);
        await setTimeout(() => {
            setCurrentPage(currentPage + inc);
            setFade(true)
        }, 400);
    }


    return (
        <>
            <TopBar lineColor="white" backgroundColorful={"#001B46"} fontColor="#FB724C"/>

            <Helmet>
                <title> Add Company | ESG Navigator </title>
            </Helmet>

            <StyledRoot style={{backgroundColor: "white"}}>

                <StyledSection style={{
                    backgroundColor: "#001B46",
                    borderBottomRightRadius: "30%", borderShadow: "none"
                }}>
                    <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}
                                style={{color: "white"}}>
                        {isEsgReportView ? "Your ESG Information" : "Let's configure your company profile"}
                    </Typography>
                </StyledSection>

                <div style={{backgroundColor: "#001B46", width: "100%"}}>
                    <Container width="100%" style={{
                        borderTopLeftRadius: "20%",
                        backgroundColor: "white", marginTop: "10px"
                    }}>
                        <StyledContent>
                            <Grow in={fade} style={{display: 'flex'}}>
                                <div>
                                    {(response === '')
                                        ?
                                        <Stack spacing={2}>
                                            {pages[currentPage]}
                                            {currentPage > 0 && (
                                                <Button fullWidth size="small" type="submit" variant="contained"
                                                        onClick={() => {
                                                            triggerFade(-1);
                                                        }}>
                                                    Previous
                                                </Button>
                                            )}
                                            {currentPage < pages.length - 1 && (
                                                <Button fullWidth size="small" type="submit" variant="contained"
                                                        onClick={() => {
                                                            triggerFade(+1);
                                                        }}>
                                                    Next
                                                </Button>
                                            )}
                                            {currentPage === pages.length - 1 && (
                                                <Button fullWidth size="small" type="submit" variant="contained"
                                                        onClick={handleSubmit}>
                                                    Submit
                                                </Button>
                                            )}
                                            {isLoading && <LinearProgress/>}

                                        </Stack>
                                        : <ESGResult data={response.message}/>
                                    }
                                </div>
                            </Grow>
                        </StyledContent>
                    </Container>
                </div>
            </StyledRoot>
        </>);
}
