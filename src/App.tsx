import { BrowserRouter } from 'react-router-dom';
import { FooterInfo } from './components/footer';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';
import AppRoutes from './routes/AppRoutes';

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <div className="flex-auto overflow-auto ">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
        <FooterInfo />
      </ThemeProvider>
    </div>
  );
}
