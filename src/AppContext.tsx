import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, BasketItem } from "./types";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: string) => void;
  clearBasket: () => void;
  t: (key: { GE: string; EN: string }) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("gen_lang");
    return (saved as Language) || "GE";
  });

  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const saved = localStorage.getItem("gen_basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("gen_lang", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("gen_basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item: BasketItem) => {
    if (!basket.find((i) => i.id === item.id)) {
      setBasket([...basket, item]);
    }
  };

  const removeFromBasket = (id: string) => {
    setBasket(basket.filter((i) => i.id !== id));
  };

  const clearBasket = () => setBasket([]);

  const t = (key: { GE: string; EN: string }) => key[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
