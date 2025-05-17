import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotes/quotesSlice";
import { globalLoadingReducer } from "./global-loading/globalLoadingReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      quotes: quotesSlice,
      globalLoading: globalLoadingReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
