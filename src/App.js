import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// topbar
import TopBar from "./pages/TopBar";
import FooterBar from "./pages/FooterBar";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
          <FooterBar />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
