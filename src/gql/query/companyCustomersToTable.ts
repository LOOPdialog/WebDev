import { gql } from '@apollo/client';

const COMPANY_CUSTOMERS_TABLE = gql`
  query CompanyCustomers($company_id: String!) {
      companyCustomers(company_id: $company_id) {
        id
        opportunitiesCount
        customerType {
          name
        }
        profile {
          firstName
          lastName
          channels {
            type
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

export default COMPANY_CUSTOMERS_TABLE;
