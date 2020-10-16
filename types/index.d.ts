import { Provider } from 'react';
import { Reducer } from 'redux';
// declare index;

type WithTranslate = () => any;
interface Translations {
  [key: string]: any;
}
interface Placeholders {
  [key: string]: any;
}
interface IntlProviderProps {
  translations: Translations;
  locale: string;
}
interface IntlProviderProps {
  setLocale(locale: string): void;
}

interface Params {
  [key: string]: string;
}

type Translate = (key: string, params: Params) => string | undefined;

type TranslateUtil = (
  translations: Translations,
  locale: string,
  key: string,
  placeholders: Placeholders,
  isHTML: boolean,
  options: any,
) => (
  translateKey: string,
  translations: TranslateUtil,
  locale: string,
  key: string,
  placeholders: Placeholders,
  isHTML: boolean,
  options?: any,
) => string;

type IntlProvider = Provider<IntlProviderProps>;
type useTranslate = () => Translate;

export interface Intl {
  IntlReducer: Reducer<>;
  withTranslate: WithTranslate;
  IntlProvider: IntlProvider;
  IntlActions: IntlActions;
  translateUtil: TranslateUtil;
  useTranslate: UseTranslate;
}
