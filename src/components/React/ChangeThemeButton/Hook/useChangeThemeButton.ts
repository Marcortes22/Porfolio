export function useChangeThemeButton() {
  function changeThemeButton() {
    const theme = document.documentElement.getAttribute('data-theme');

    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light',
    );

    theme === 'light'
      ? (localStorage.theme = 'dark')
      : (localStorage.theme = 'light');
  }
  return {
    changeThemeButton,
  };
}
