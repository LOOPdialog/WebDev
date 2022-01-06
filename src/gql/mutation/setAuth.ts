
import { gql } from '@apollo/client';

const SET_AUTH = gql`
  mutation SetAuth($flag: Boolean!) {
    setAuth(isAuth: $flag) {
      main {
      isAuth
      }
    }
  }
`;

export default SET_AUTH;
