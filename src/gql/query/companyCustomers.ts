import { gql } from '@apollo/client';

const COMPANY_SUCTOMERS = gql`
  query CompanyCustomers($company_id: String!) {
      companyCustomers(company_id: $company_id) {
        id
        birthday
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
        }
      }
  }
`;

export default COMPANY_SUCTOMERS;
