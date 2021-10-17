import React, { useCallback, useState } from "react";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AddStarButton } from "./AddStarButton";
import { RemoveStarButton } from "./RemoveStarButton";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { RepositoryListItem_repository$key } from "./__generated__/RepositoryListItem_repository.graphql";
import { IssueList } from "./IssueList";

type Props = {
  repository: RepositoryListItem_repository$key;
};

export const RepositoryListItem = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const repository = useFragment(
    graphql`
      fragment RepositoryListItem_repository on Repository {
        id
        name
        viewerHasStarred
        issues(first: 10) {
          totalCount
        }
        ...IssueList_repository
      }
    `,
    props.repository
  );

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const hasIssue = repository.issues.totalCount !== 0;

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {repository.viewerHasStarred ? (
            <RemoveStarButton input={{ starrableId: repository.id }} />
          ) : (
            <AddStarButton input={{ starrableId: repository.id }} />
          )}
        </ListItemIcon>
        <ListItemText primary={repository.name}></ListItemText>
        {hasIssue && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {hasIssue && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <IssueList repository={repository} />
        </Collapse>
      )}
    </>
  );
};
