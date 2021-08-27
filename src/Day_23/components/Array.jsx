import { useState, useCallback } from "react";

export function useArray(initial) {
  const [values, setValues] = useState(initial);
  return {
    values,
    add: useCallback((item) => {
      const newValues = [...values];
      setValues(newValues);
    }),
    delete: useCallback((id) => {
      const newVAlues = [...values];
      newValues.splice(id, 1);
      setValues(newValues);
    }),
    clear: useCallback(() => {
      setValues([]);
    }),
  };
}
