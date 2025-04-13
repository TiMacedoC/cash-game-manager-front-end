import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
// import { Footer, FooterBottom } from './ui/footer';

export function FooterInfo() {
  const { t } = useTranslation();

  const copyright = `© 2025 Tiago Macedo. ${t('allRightsReserved')}`;
  const links = [
    { text: t('contact'), href: 'https://www.linkedin.com/in/timacedoc/' },
  ];

  return (
    <footer className="min-h-[5vh]">
      <div className="w-full mx-auto max-w-screen p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm sm:text-center ">{copyright}</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
          {links.map((l) => (
            <li>
              <a href={l.href} className="hover:underline me-4 md:me-6">
                {l.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
