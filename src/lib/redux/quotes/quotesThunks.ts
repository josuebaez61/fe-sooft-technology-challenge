import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuotesService } from "../../../services";
import type { CreateQuotePayload } from "../../../models";
import { hideQuoteModalForm, setCurrentSearchValue } from "./quotesActions";
import { showGlobalLoading } from "../global-loading/globalLoadingActions";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async (args: { searchValue?: string }, thunkAPI) => {
    const response = await QuotesService.getQuotes(args.searchValue);
    thunkAPI.dispatch(setCurrentSearchValue(args.searchValue || null));
    return response;
  }
);

export const createQuote = createAsyncThunk(
  "quotes/createQuote",
  async (payload: CreateQuotePayload, thunkApi) => {
    const response = await QuotesService.createQuote(payload);
    thunkApi.dispatch(hideQuoteModalForm());
    return response;
  }
);

export const deleteQuote = createAsyncThunk(
  "quotes/deleteQuote",
  async (id: string, thunk) => {
    thunk.dispatch(showGlobalLoading());
    const response = await QuotesService.deleteQuote(id);
    thunk.dispatch(hideQuoteModalForm());
    return response;
  }
);
