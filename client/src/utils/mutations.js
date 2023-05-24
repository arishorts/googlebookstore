import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  #mutation saveBook($userId: ID!, $content: BookContent!) {
  #saveBook(userId: $userId, content: $content) {
  mutation saveBook($content: BookContent!) {
    saveBook(content: $content) {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        image
        description
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        title
        bookId
        authors
        image
        description
        link
      }
    }
  }
`;
