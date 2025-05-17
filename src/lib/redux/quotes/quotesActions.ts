import { createAction } from "@reduxjs/toolkit";

export const setCurrentSearchValue = createAction<string | null>(
  "quotes/setCurrentSearchValue"
);
export const showQuoteModalForm = createAction("quotes/showQuoteModalForm");
export const hideQuoteModalForm = createAction("quotes/hideQuoteModalForm");
