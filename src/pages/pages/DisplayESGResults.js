import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    List,
    ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";
// added new imports: 
import React, { useEffect, useState } from 'react';
import { ResponsiveRadar } from '@nivo/radar'


function ESGSpiderChart({ ratings }) {
    const [data, setData] = useState(ratings);

    useEffect(() => {
        if(ratings) {
            setData(ratings);
        }
    }, [ratings]);


    return (
        <div style={{ height: '500px' }}>
            <ResponsiveRadar
                data={data}
                keys={['rating']}
                indexBy="topic"
                maxValue="auto"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                enableDotLabel
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.25}
                blendMode="multiply"
                animate
                motionConfig="wobbly"
                isInteractive
            />
        </div>
    );
}

const ComplianceBox = ({ bodyText }) => {
    return (
        <Box my={2} width={1}>
            <Typography variant="h4" gutterBottom>
                Your Company's ESG Compliance
            </Typography>
            <Typography variant="body1" style={{ width: '100%' }}>
                {bodyText.general_compliance}
            </Typography>
        </Box>
    );
};

const StyledSection = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const StyledContent = styled(Typography)(({ theme }) => ({
    maxWidth: 480,
    padding: theme.spacing(2, 0),
}));

const StyledList = styled(List)(({ theme }) => ({
    margin: 'auto',
    paddingLeft: theme.spacing(2),
    justifyContent: 'center'
}));

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

function Disclosure({disclosure}) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <StyledContent variant="subtitle1">{disclosure.name}</StyledContent>
            </AccordionSummary>
            <AccordionDetails>
                <StyledContent variant="body1">{disclosure.description}</StyledContent>
            </AccordionDetails>
        </Accordion>
    );
}

function ESGTopic({topic}) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <StyledContent variant="subtitle1">{topic.name}</StyledContent>
            </AccordionSummary>
            <AccordionDetails>
                <StyledContent variant="body1">{topic.description}</StyledContent>
                <StyledContent variant="h6">Topic actions:</StyledContent>
                <StyledList>
                    {topic.actions.map((action, index) => (
                        <ListItem key={index}>{action}</ListItem>
                    ))}
                </StyledList>
                <StyledContent variant="h6">Disclosures:</StyledContent>
                {topic.disclosures.map((disclosure, index) => (
                    <Disclosure key={index} disclosure={disclosure} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}

function ESGStack({sectionData, sectionName}) {
    return (
        <StyledSection>
            <StyledContent variant="h4">{capitalize(sectionName)}</StyledContent>
            <StyledContent variant="body1">{sectionData.explanation}</StyledContent>
            <StyledContent variant="h5">Topics: </StyledContent>
            {sectionData.topics.map((topicWrapper, index) => (
                <ESGTopic key={index} topic={topicWrapper.topic} />
            ))}
        </StyledSection>
    );
}

export default function ESGResult({ data }) {
    let response;
    if (typeof data === 'string') {
        response = JSON.parse(data);
    } else {
        response = data;
    }

    if (response !== undefined) {
        const { general, rating, ...sections } = response;

        return (
            <Box>
                <ComplianceBox bodyText={general} />
                <ESGSpiderChart ratings={response.rating} />
                {Object.entries(sections).map(([sectionName, sectionData]) => (
                    <ESGStack key={sectionName} sectionData={sectionData} sectionName={sectionName} />
                ))}
            </Box>
        );
    }

    return <div />;
}


