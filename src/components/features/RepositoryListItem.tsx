import { FC, useCallback, useMemo, useState } from "react";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { StarButton } from "./StarButton";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { RepositoryListItem_repository$key } from "../../__generated__/RepositoryListItem_repository.graphql";
import { IssueList } from "./IssueList";

type Props = {
  repository: RepositoryListItem_repository$key;
};

const fragment = graphql`
  fragment RepositoryListItem_repository on Repository {
    id
    name
    viewerHasStarred
    issues(first: 10) {
      totalCount
    }
    ...IssueList_repository
  }
`;

export const RepositoryListItem: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  const repository = useFragment(fragment, props.repository);

  const hasIssue = useMemo(() => repository.issues.totalCount !== 0, []);
  const handleClick = useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <StarButton
            starred={repository.viewerHasStarred}
            repositoryId={repository.id}
          />
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
