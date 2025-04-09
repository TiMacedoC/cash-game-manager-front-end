import { LanguageSelector } from './components/language-selector';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { SignIn } from './pages/signin';

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ModeToggle />
        <LanguageSelector />
        <SignIn />
      </ThemeProvider>
    </>
  );
}
