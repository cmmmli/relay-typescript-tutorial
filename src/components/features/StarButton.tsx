import { FC, MouseEventHandler, useCallback } from "react";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { RemoveStarButton } from "./RemoveStarButton";
import { AddStarButton } from "./AddStarButton";
import { RepositoryList } from "./RepositoryList";

type Props = {
  starred: boolean;
  repositoryId: string;
};

export const StarButton: FC<Props> = ({ starred, repositoryId }) => {
  const input = { starrableId: repositoryId };
  return (
    <>
      {starred ? (
        <RemoveStarButton input={input} />
      ) : (
        <AddStarButton input={input} />
      )}
    </>
  );
};
