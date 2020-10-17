import React,{ Provider } from 'react';
import { Reducer } from 'redux';
// declare index;

export type withTranslate = () => any;
export interface Translations {
  [key: string]: any;
}
export interface Placeholders {
  [key: string]: any;
}
export interface IntlProviderProps {
  translations: Translations;
  locale: string;
}
export interface IntlActions {
  setLocale(locale: string): void;
}

export interface Params {
  [key: string]: string;
}

export type Translate = (key: string, params: Params) => string | undefined;

export function TranslateUtil (
  translations: Translations,
  locale: string,
  key: string,
  placeholders: Placeholders,
  isHTML: boolean,
  options: any,
) : (
  translateKey: string,
  translations: Translations,
  locale: string,
  key: string,
  placeholders: Placeholders,
  isHTML: boolean,
  options?: any,
) => string;

export declare class IntlProvider extends React.Component<IntlProviderProps>{}

export function useTranslate(): Translate;


export type IntrlReducer = Reducer<any>;


