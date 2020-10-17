import React, { useContext } from 'react';

const TranslateContext = React.createContext({ translate: (key, (params = {})), locale: '', llocale_name: '' });
const { Provider: TranslateProvider, Consumer: TranslateConsumer } = TranslateContext;
const useTranslate = () => useContext(TranslateContext);

export { TranslateProvider, TranslateConsumer, useTranslate };
export default TranslateContext;
