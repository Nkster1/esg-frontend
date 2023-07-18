import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';
import AddCompany from './pages/AddCompany';
import PricingPage from "./pages/PricingPage";
import ChatWindow from "./components/chat";

import {isLoggedIn} from "./states";
import SignupPage from "./pages/SignupPage";
import ESGResult from "./pages/DisplayESGResults";
import {sampleData} from "./utils/sampleData";
import Dashboard from './pages/Dashboard';

// ----------------------------------------------------------------------

export default function Router() {
    let paths;
    if (!isLoggedIn()) {
        paths =
            [
                {
                    path: '/',
                    element: <HomePage/>
                },
                {
                    path: '/home',
                    element: <HomePage/>
                },
                {
                    path: '/pricing',
                    element: <PricingPage/>
                },
                {
                    path: '/result',
                    element: <ESGResult data={sampleData}/>
                },
                {
                    path: '/chat',
                    element: <ChatWindow/>
                },
                {
                    path: "addCompany",
                    element: <AddCompany/>
                },
                {
                    path: '/login',
                    element: <LoginPage/>,
                },
                {
                    path: '/signup',
                    element: <SignupPage/>,
                },
                {
                    path: '*',
                    element: <Navigate to="/404" replace/>,
                }
            ];
    } else {
        paths = [
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '/result',
                element: <ESGResult/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>

            },
            {
                path: '/pricing',
                element: <PricingPage/>
            },
            {
                path: '/addCompany',
                element: <AddCompany/>
            },
            {
                element: <SimpleLayout/>,
                children: [
                    {element: <Navigate to="/home"/>, index: true},
                    {path: '404', element: <Page404/>},
                    {path: '*', element: <Navigate to="/404"/>},
                ],
            },
            {
                path: '*',
                element: <Navigate to="/404" replace/>,
            }];
    }

    return useRoutes(paths);
}
