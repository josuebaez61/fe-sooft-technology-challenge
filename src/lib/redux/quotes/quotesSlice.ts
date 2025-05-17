import { createSlice } from "@reduxjs/toolkit";
import { createQuote, deleteQuote, fetchQuotes } from "./quotesThunks";
import type { Quote } from "../../../models";

interface QuotesState {
  quotes: Quote[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  currentSearch: string | null;
  loadError: string | null;
  createError: string | null;
  deleteError: string | null;
  modalFormVisible: boolean;
}

const initialState: QuotesState = {
  quotes: [],
  currentSearch: null,
  loadError: null,
  isDeleting: false,
  isCreating: false,
  isLoading: false,
  modalFormVisible: false,
  createError: null,
  deleteError: null,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    showQuoteModalForm: (state) => {
      state.modalFormVisible = true;
    },
    hideQuoteModalForm: (state) => {
      state.modalFormVisible = false;
    },
    setCurrentSearchValue: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state, action) => {
        state.isLoading = true;
        state.currentSearch = action.payload || null;
        state.loadError = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quotes = action.payload;
        state.loadError = null;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.isLoading = false;
        state.loadError = action.error.message || "Failed to fetch quotes";
      });

    builder
      .addCase(createQuote.pending, (state) => {
        state.isCreating = true;
        state.createError = null;
      })
      .addCase(createQuote.fulfilled, (state, action) => {
        state.isCreating = false;
        state.createError = null;
        state.quotes.push(action.payload);
      })
      .addCase(createQuote.rejected, (state, action) => {
        state.isCreating = false;
        state.createError = action.error.message || "Failed to create quote";
      });

    builder
      .addCase(deleteQuote.pending, (state) => {
        state.isDeleting = true;
        state.deleteError = null;
      })
      .addCase(deleteQuote.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.quotes = state.quotes.filter(
          (quote) => quote.id !== action.payload.id
        );
        state.deleteError = null;
      })
      .addCase(deleteQuote.rejected, (state, action) => {
        state.isDeleting = false;
        state.deleteError = action.error.message || "Failed to create quote";
      });
  },
});

export default quotesSlice.reducer;
