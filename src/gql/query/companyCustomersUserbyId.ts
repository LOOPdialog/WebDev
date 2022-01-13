import { gql } from '@apollo/client';

const COMPANY_CUSTOMERS_USER_BY_ID = gql`
  query CustomerDetails($user_id: String!) {
    customerDetails(id: $user_id){
      id
      profile {
        firstName
        lastName
        avatar
      }
      opportunitiesCount
      internalNotes {
        read
        title
      }
      birthday
      address {
        street
        streetNumber
        zipCode
        city
        country
      }
      opportunities {
        customer {
          profile {
            firstName
          }
          address {
            street
            streetNumber
            zipCode
            city
            country
          }
        }
      }
    }
  }
`;

export default COMPANY_CUSTOMERS_USER_BY_ID;
