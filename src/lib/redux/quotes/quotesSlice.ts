import { createSlice } from "@reduxjs/toolkit";
import { fetchQuotes } from "./quotesThunks";
import { FetchStatus } from "../../../utils";
import type { Quote } from "../../../models";

interface QuotesState {
  items: Quote[];
  error: string | null;
  status: FetchStatus;
}

const initialState: QuotesState = {
  items: [],
  status: FetchStatus.IDLE,
  error: null,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.items = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = FetchStatus.FAILED;
        state.error = action.error.message || "Failed to fetch quotes";
      });
  },
});

export default quotesSlice.reducer;
