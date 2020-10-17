export function setLocale(locale, localeName) {
  return {
    type: 'SET_LOCALE',
    locale,
    localeName,
  };
}
