
import { gql } from '@apollo/client';

const GET_MAIN = gql`
  query WriteTodo {
    main {
      themed
    }
  }
`;

export default GET_MAIN;
