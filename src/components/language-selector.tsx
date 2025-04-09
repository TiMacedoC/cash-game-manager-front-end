import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'br',
    flag: 'src/assets/flags/brazil.svg',
    country: 'Brazil',
    description: 'Brazilian-Portuguese',
    nativeDescription: 'Português do Brasil',
  },
  {
    code: 'en',
    flag: 'src/assets/flags/united-states.svg',
    country: 'United States',
    description: 'English',
    nativeDescription: 'English',
  },
];

// const changeLanguage = () => {
//   console.log('\n❓ ~changeLanguage:', '❗\n');
// };

export function LanguageSelector() {
  const [position, setPosition] = React.useState('bottom');
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{t('language')}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('selectLanguage')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {languages.map((lng) => (
            <DropdownMenuRadioItem value={lng.code}>
              <img src={lng.flag} alt={`Flag of ${lng.country}`} />
              {lng.nativeDescription}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
