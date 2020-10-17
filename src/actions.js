export function setLocale(locale, locale_name) {
  return {
    type: 'SET_LOCALE',
    locale,
    locale_name,
  };
}
