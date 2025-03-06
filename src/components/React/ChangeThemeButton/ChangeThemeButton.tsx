import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './styles/ChangeThemeButtonStyles';
import { useChangeThemeButton } from './Hook/useChangeThemeButton';
import { useEffect, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
export default function ChangeThemeButton() {
  const { changeThemeButton } = useChangeThemeButton();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cache = createCache({ key: 'mui', prepend: true });
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
  return (
    <CacheProvider value={cache}>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} />}
        checked={isDarkMode}
        onChange={changeThemeButton}
        label=""
      />
    </CacheProvider>
  );
}
