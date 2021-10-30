import { FC } from "react";
import { RemoveStarButton } from "./RemoveStarButton";
import { AddStarButton } from "./AddStarButton";

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
