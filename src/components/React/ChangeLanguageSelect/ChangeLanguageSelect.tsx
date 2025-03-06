import { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { useState, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface Props {
  currentLocale: string;
}

export default function ChangeLanguageSelect({ currentLocale }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cache = createCache({ key: 'ChangeLanguageSelect', prepend: true });
  useEffect(() => {
    const checkDarkMode = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(theme === 'dark');
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const languages = [
    { code: 'es', label: 'Español', path: '/', locale: 'es' },
    { code: 'us', label: 'English', path: '/en', locale: 'en' },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.locale === currentLocale,
  );

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLanguage = languages.find(
      (lang) => lang.code === event.target.value,
    );

    if (!selectedLanguage || selectedLanguage.locale === currentLocale) return;

    // Obtiene la URL actual sin el idioma
    let currentPath = window.location.pathname;

    // Elimina el prefijo de idioma actual si está presente
    const localePrefix = `/${currentLocale}`;

    if (currentPath.startsWith(localePrefix)) {
      currentPath = currentPath.replace(localePrefix, '');
    }

    // Si la URL resultante es vacía, asegúrate de que sea "/"
    if (!currentPath.startsWith('/')) {
      currentPath = '/' + currentPath;
    }

    // Construye la nueva URL con el idioma seleccionado
    const newUrl =
      selectedLanguage.locale === 'es'
        ? currentPath
        : `/${selectedLanguage.locale}${currentPath}`;

    window.location.href = newUrl;
  };

  return (
    <CacheProvider value={cache}>
      <Select
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // 🔹 Elimina el borde del select
          },
          '& .MuiSelect-icon': {
            color: isDarkMode ? 'white' : 'black', // 🔹 Cambia el borde en modo oscuro
          },
        }}
        value={currentLanguage?.code}
        onChange={handleChange}
        className="text-white border-none"
        displayEmpty
        renderValue={(value) => {
          const selectedLang = languages.find((lang) => lang.code === value);
          return (
            <div className="flex items-center gap-2 dark:text-white border-none">
              <span className={`fi fi-${value}`}></span>
              {selectedLang?.label}
            </div>
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            value={lang.code}
            className="dark:text-white"
          >
            <span className={`fi fi-${lang.code} mr-2`}></span>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </CacheProvider>
  );
}
