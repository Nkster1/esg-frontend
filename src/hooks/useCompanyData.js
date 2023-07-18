import axios from 'axios';
import {useState} from "react";

import {BASE_URL} from "../index";

export const useCompanyDataHook = () => {
    const [legalName, setLegalName] = useState('');
    const [ownership, setOwnership] = useState('');
    const [legalForm, setLegalForm] = useState('');
    const [location, setLocation] = useState('');
    const [sector, setSector] = useState('');
    const [activities, setActivities] = useState('');
    const [products, setProducts] = useState('');
    const [markets, setMarkets] = useState('');
    const [supplyChain, setSupplyChain] = useState('');
    const [numEmployees, setNumEmployees] = useState('');
    const [response, setResponse] = useState('');

    const getCompanyData = () => {
        return {
            legal_name: legalName,
            ownership,
            legal_form: legalForm,
            location,
            sector,
            activities,
            products,
            markets,
            supply_chain: supplyChain,
            num_employees: numEmployees
        }
    }
    const submitData = async () => {
        const companyData = {
            legal_name: legalName,
            ownership,
            legal_form: legalForm,
            location,
            sector,
            activities,
            products,
            markets,
            supply_chain: supplyChain,
            num_employees: numEmployees
        };

        await axios.post(`${process.env.REACT_APP_API_URL}/langchain/esg_report`, companyData)
            .then(response => {
                setResponse(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    return {
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
    };
};
