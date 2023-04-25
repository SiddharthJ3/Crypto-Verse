import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';

const Crypto = createContext()

const Context = ({children}) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR")
    {
      setSymbol("₹");
    }
    else if (currency === "USD")
    {
      setSymbol("$");
    }
  }, [currency]);
  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}>
      {children}
    </Crypto.Provider>
  )
}

export default Context;

export const State = () => {
  return useContext(Crypto);
}
