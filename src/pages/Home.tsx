import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { SearchInput, SearchResultItems } from "../components";

const GET_USER = gql`
  query SearchUser($username: String!) {
    search(query: $username, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            avatarUrl(size: 200)
            name
            url
            login
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [getUser, result] = useLazyQuery(GET_USER);

  const handleChange = (value: any) => {
    getUser({ variables: { username: value } });
  };

  return (
    <div>
      <h1>Discover github profiles</h1>
      <SearchInput handleChange={(e: any) => handleChange(e)} />
      <SearchResultItems items={result?.data?.search} />
    </div>
  );
};

export default Home;
