import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import { graphql, useFragment } from "react-relay";

import { IssueList_repository$key } from "~/src/__generated__/IssueList_repository.graphql";

type Props = {
  repository: IssueList_repository$key;
};

const fragment = graphql`
  fragment IssueList_repository on Repository
  @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
    issues(first: $first) {
      edges {
        node {
          id
          title
          bodyText
        }
      }
    }
  }
`;

export const IssueList: FC<Props> = ({ repository }) => {
  const data = useFragment(fragment, repository);

  const issues = (data.issues.edges || [])
    ?.map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null);

  const listItems = issues.map((issue) => {
    return (
      <ListItem key={issue.id} disablePadding sx={{ pl: 4 }}>
        <ListItemButton>
          <ListItemText primary={issue.title} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <List component="div" disablePadding>
      {listItems}
    </List>
  );
};
