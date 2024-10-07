import { ApolloServer} from '@apollo/server';
import { gql } from 'graphql';

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type AddBookMutationResponse {
    code: String!
    success: Boolean!
    message: String!
    book: Book
  }

  type Mutation {
    addBook(title: String, author: String): AddBookMutationResponse
  }
`;
