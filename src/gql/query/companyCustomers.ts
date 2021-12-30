import { gql } from '@apollo/client';

const COMPANY_SUCTOMERS = gql`
  query CompanyCustomers($company_id: String!) {
      companyCustomers(company_id: $company_id) {
        id
        birthday
      }
  }
`;

export default COMPANY_SUCTOMERS;
