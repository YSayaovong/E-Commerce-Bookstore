import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries(filter: { code: { in: ["US", "CA", "GB"] } }) {
      code
      name
      emoji
    }
  }
`;
