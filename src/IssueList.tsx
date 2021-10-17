import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { IssueList_repository$key } from "./__generated__/IssueList_repository.graphql";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  repository: IssueList_repository$key;
};

export const IssueList = (props: Props) => {
  const data = useFragment(
    graphql`
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
    `,
    props.repository
  );

  const issues = data.issues.edges
    ?.map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null);

  if (!issues) {
    return <></>;
  }

  const listItems = issues.map((issue) => {
    return (
      <ListItem key={issue.id}>
        <ListItemButton sx={{ pl: 4 }}>
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
