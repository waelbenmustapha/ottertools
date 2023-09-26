import { createContext, useContext, useState } from "react";
import { en, de, fr } from "../localizations";
import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

  const [locale,setLocale]=useState(Localization.locale)
  const i18n = new I18n({ en, de, fr });
  i18n.enableFallback = true;
  i18n.locale = locale;

  return (
    <AppContext.Provider
      value={{ locale,setLocale,i18n }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
