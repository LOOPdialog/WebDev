import { gql } from '@apollo/client';

const COMPANY_CUSTOMERS = gql`
  query CompanyCustomers($company_id: String!) {
      companyCustomers(company_id: $company_id) {
        id
        birthday
        opportunitiesCount
        address {
          id
          street
          streetNumber
          zipCode
          city
          country
        }
        customerType {
          id
          name
        }
        profile {
          id
          firstName
          lastName
          avatar
          company {
            id
            name
          }
          channels {
            id
            type
            value
            config {
              api_key
            }
          }
          company {
            channels {
              id
              type
              value
            }
          }
        }
        internalNotes {
          read
        }
        opportunities {
          messagesCount
        }
      }
  }
`;

export default COMPANY_CUSTOMERS;
