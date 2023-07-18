import ReactDOM from 'react-dom/client';

import { GoogleOAuthProvider } from '@react-oauth/google';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';


// ----------------------------------------------------------------------
export const BASE_URL = process.env.REACT_APP_API_URL


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="425079686292-03pl5u5lm36tljmfea8kpkaio7od04vq.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
