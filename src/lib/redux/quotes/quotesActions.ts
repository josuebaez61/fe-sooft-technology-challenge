import { createAction } from "@reduxjs/toolkit";

// Cambia para que reciba un string como payload
export const setCurrentSearchValue = createAction<string | null>(
  "quotes/setCurrentSearchValue"
);
export const showQuoteModalForm = createAction("quotes/showQuoteModalForm");
export const hideQuoteModalForm = createAction("quotes/hideQuoteModalForm");
