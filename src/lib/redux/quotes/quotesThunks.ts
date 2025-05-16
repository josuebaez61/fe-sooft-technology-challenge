import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuotesService } from "../../../services";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async (searchValue?: string) => {
    const response = await QuotesService.getQuotes(searchValue);
    return response;
  }
);
