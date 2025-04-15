import { BrowserRouter } from 'react-router-dom';
import { FooterInfo } from './components/footer';
import { Header } from './components/header';
import { ThemeProvider } from './components/theme-provider';
import AppRoutes from './routes/AppRoutes';

export function App() {
  return (
    <div className="flex flex-col">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="flex-auto overflow-y-auto ">
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <FooterInfo />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}
