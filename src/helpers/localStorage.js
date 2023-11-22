import React, { useCallback, useEffect, useState } from "react";

export default function useLocalStorage(key) {
  //const localStorageValue = localStorage.getItem(key);
  const [value, setValue] = useState("");

  const setItem = (newValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const getItem = useCallback(() => {
    const val = localStorage.getItem(key);
    setValue(val);
  }, [key]);

  useEffect(() => {
    getItem();
  }, [getItem, localStorageValue]);

  return {
    value,
    getItem,
    setItem,
  };
}
