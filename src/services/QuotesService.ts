import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Quote } from "../models";

export class QuotesService {
  static async getQuotes(searchValue?: string): Promise<Quote[]> {
    const quotesCol = collection(db, "quotes");
    const quoteSnapshot = await getDocs(quotesCol);
    let quotes = quoteSnapshot.docs.map((doc) => doc.data() as Quote);

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
}
