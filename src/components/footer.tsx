import { useTranslation } from 'react-i18next';

export function FooterInfo() {
  const { t } = useTranslation();

  const copyright = `© 2025 Tiago Macedo. ${t('allRightsReserved')}`;
  const links = [
    { text: t('contact'), href: 'https://www.linkedin.com/in/timacedoc/' },
  ];

  return (
    <footer className="">
      <div
        className="
      w-full
      mx-auto
      max-w-screen
      p-4
      sm:flex
      sm:items-center
      sm:justify-between
      "
      >
        <span className="text-sm sm:text-center">{copyright}</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
          {links.map((l) => (
            <li>
              <a
                href={l.href}
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                {l.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
