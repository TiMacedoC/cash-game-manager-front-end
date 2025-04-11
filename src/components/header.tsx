import { LanguageSelector } from './language-selector';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="flex justify-end p-3 ">
      <div className="mr-3 ">
        <ModeToggle />
      </div>
      <div>
        <LanguageSelector />
      </div>
    </header>
  );
}
