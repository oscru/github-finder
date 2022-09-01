import { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SearchInput, DisplayData } from "../components";

const GET_USER_DATA = gql`
  query GetUserData($username: String!) {
    search(query: $username, type: USER, first: 1) {
      edges {
        node {
          ... on User {
            id
            avatarUrl(size: 200)
            name
            url
            login
            bio
            email
            followers {
              totalCount
            }
            websiteUrl
            repositories(last: 10) {
              nodes {
                id
                name
                url
                stargazers {
                  totalCount
                }
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;
const Profile = () => {
  const { profile } = useParams();
  const [getUserData, result] = useLazyQuery(GET_USER_DATA);

  useEffect(() => {
    getUserData({ variables: { username: profile } });
  }, []);

  return (
    <div>
      {/* <SearchInput /> */}
      <DisplayData data={result} />
    </div>
  );
};

export default Profile;
