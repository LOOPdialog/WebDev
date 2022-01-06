
import { gql } from '@apollo/client';

const GET_MAIN = gql`
  query WriteTodo {
    main {
      themed
      isAuth
    }
  }
`;

export default GET_MAIN;
