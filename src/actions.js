export function setLocale(locale, name) {
  return {
    type: 'SET_LOCALE',
    locale,
    name,
  };
}
