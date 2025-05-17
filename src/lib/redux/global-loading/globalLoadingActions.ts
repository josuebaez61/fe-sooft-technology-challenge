import { createAction } from "@reduxjs/toolkit";

export const showGlobalLoading = createAction(
  "globalLoading/showGlobalLoading"
);
export const hideGlobalLoading = createAction(
  "globalLoading/hideGlobalLoading"
);
