import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { RepositoryList_owner$key } from "./__generated__/RepositoryList_owner.graphql";
import { List } from "@mui/material";
import { RepositoryListItem } from "./RepositoryListItem";
import { Box } from "@mui/system";

type Props = {
  owner: RepositoryList_owner$key;
};

export const RepositoryList = ({ owner }: Props) => {
  const data = useFragment(
    graphql`
      fragment RepositoryList_owner on User
      @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
        repositories(first: $first) {
          edges {
            node {
              id
              ...RepositoryListItem_repository
            }
          }
        }
      }
    `,
    owner
  );

  const repositories = data.repositories.edges
    ?.map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null);

  if (repositories == null) {
    return <></>;
  }
  const repositoryItems = repositories.map((repo) => {
    return <RepositoryListItem repository={repo} key={repo.id} />;
  });

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%", maxWidth: 360 }}>
      <List component="nav" aria-label="main">
        {repositoryItems}
      </List>
    </Box>
  );
};
