
import { gql } from '@apollo/client';

const LOGGED = gql`
  query {
    loggedUser {
        id
        title
        email
      }
  }
`;

export default LOGGED;
