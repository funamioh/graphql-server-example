import { AddBookMutationResponse } from "generated/graphql.js";
import { Book } from "../models/book.js";

export const resolvers = {
  Query: {
    books: async () => await Book.find(),
  },
  Mutation: {
    addBook: async (_, { title, author }): Promise<AddBookMutationResponse> => {
      const book = new Book({ title, author });
      try {
        await book.save();
        return {
          createdAt: new Date().toISOString(),
          message: "added",
          success: true,
          book: book,
        };
      } catch (error) {
        return {
          createdAt: null,
          message: "failed",
          success: false,
          book: null,
        };
      }
    },
  },
};
