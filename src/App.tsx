import { BrowserRouter } from 'react-router-dom';
import { FooterInfo } from './components/footer';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';
import AppRoutes from './routes/AppRoutes';

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <FooterInfo />
      </ThemeProvider>
    </>
  );
}
