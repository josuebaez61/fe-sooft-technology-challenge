import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import type { CreateQuotePayload, Quote } from "../models";

export class QuotesService {
  static readonly collectionName = "quotes";

  static async getQuotes(searchValue?: string): Promise<Quote[]> {
    const quotesCol = collection(db, QuotesService.collectionName);
    const quoteSnapshot = await getDocs(quotesCol);
    let quotes = quoteSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as Quote)
    );

    if (searchValue && searchValue.trim() !== "") {
      const search = searchValue.trim().toLowerCase();
      quotes = quotes.filter(
        (q) =>
          q.quote.toLowerCase().includes(search) ||
          q.author.toLowerCase().includes(search)
      );
    }

    return quotes;
  }

  static async createQuote(quote: CreateQuotePayload): Promise<Quote> {
    const quotesCol = collection(db, QuotesService.collectionName);
    const docRef = await addDoc(quotesCol, quote);
    return {
      ...quote,
      id: docRef.id,
    } as Quote;
  }

  static async deleteQuote(id: string): Promise<{ id: string }> {
    const quoteDoc = doc(db, QuotesService.collectionName, id);
    await deleteDoc(quoteDoc);
    return { id };
  }
}
