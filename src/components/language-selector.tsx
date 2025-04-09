import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AvailableLanguagesEnum,
  availableLanguagesInfo,
} from '@/locales/locales';
import { LucideGlobe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const [position, setPosition] = React.useState('bottom');
  const { t, i18n } = useTranslation();

  const changeLanguage = (code: AvailableLanguagesEnum) => {
    i18n.changeLanguage(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <LucideGlobe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('selectLanguage')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {availableLanguagesInfo.map((lng) => (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => changeLanguage(lng.code)}
            >
              <img src={lng.flag} alt={`Flag of ${lng.country}`} />
              {lng.nativeDescription}
            </DropdownMenuItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
