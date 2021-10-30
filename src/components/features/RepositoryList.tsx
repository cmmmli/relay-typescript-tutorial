import { FC } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import type { RepositoryList_owner$key } from "~/src/__generated__/RepositoryList_owner.graphql";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { RepositoryListItem } from "./RepositoryListItem";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  owner: RepositoryList_owner$key;
};

const fragment = graphql`
  fragment RepositoryList_owner on User
  @refetchable(queryName: "RepositoryListPaginationQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 5 }
    cursor: { type: "String" }
  ) {
    repositories(
      first: $first
      after: $cursor
      orderBy: { field: UPDATED_AT, direction: DESC }
    ) @connection(key: "ReposiroyList_owner_repositories") {
      edges {
        node {
          id
          ...RepositoryListItem_repository
        }
      }
    }
  }
`;

export const RepositoryList: FC<Props> = ({ owner }) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    fragment,
    owner
  );

  const repositories = (data.repositories.edges || [])
    ?.map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null);

  const repositoryItems = repositories.map((repo) => {
    return <RepositoryListItem repository={repo} key={repo.id} />;
  });

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%", maxWidth: 360 }}>
      <List component="nav" aria-label="main">
        {repositoryItems}
        {hasNext && (
          <>
            <ListItemButton
              onClick={() => {
                loadNext(5);
              }}
              disabled={isLoadingNext}
            >
              <ListItemIcon>
                <ExpandMoreIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography align="center">Load more repositories.</Typography>
              </ListItemText>
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
};
