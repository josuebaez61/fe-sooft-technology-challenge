import { createReducer } from "@reduxjs/toolkit";
import { hideGlobalLoading, showGlobalLoading } from "./globalLoadingActions";

export interface GlobalLoadingState {
  loading: boolean;
}

const initialState: GlobalLoadingState = {
  loading: false,
};

export const globalLoadingReducer = createReducer(initialState, (reducer) => {
  reducer.addCase(showGlobalLoading, (state) => {
    state.loading = true;
  });
  reducer.addCase(hideGlobalLoading, (state) => {
    state.loading = false;
  });
  reducer.addDefaultCase((state) => {
    state.loading = false;
  });
});
