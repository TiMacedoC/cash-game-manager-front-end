import { HeaderButtons } from './components/header-buttons';
import { ThemeProvider } from './components/theme-provider';
import { SignInPage } from './pages/signin';

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <HeaderButtons />
        <SignInPage />
      </ThemeProvider>
    </>
  );
}
