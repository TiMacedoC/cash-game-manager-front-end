import { BrowserRouter } from 'react-router-dom';
import { HeaderButtons } from './components/header-buttons';
import { ThemeProvider } from './components/theme-provider';
import AppRoutes from './routes/AppRoutes';

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <HeaderButtons />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
