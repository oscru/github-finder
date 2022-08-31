import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { gql, useQuery } from "@apollo/client";
import { DisplayData, SearchInput } from "./components";

const GET_OWN_REPOSITORIES = gql`
  {
    search(query: "midudev", type: USER, first: 1) {
      edges {
        node {
          ... on User {
            id
            email
            repositories(
              last: 10
              orderBy: { field: CREATED_AT, direction: ASC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  stargazerCount
                  createdAt
                }
              }
            }
            bio
            avatarUrl(size: 200)
            followers {
              totalCount
            }
            name
            url
            websiteUrl
          }
        }
      }
      repositoryCount
    }
  }
`;

const App = () => {
  const query = useQuery(GET_OWN_REPOSITORIES);

  return (
    <div className="App">
      <SearchInput />
      {/* <DisplayData query={query} /> */}
    </div>
  );
};

export default App;
