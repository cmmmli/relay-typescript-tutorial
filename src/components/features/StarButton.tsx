import { FC } from "react";

import { AddStarButton } from "./AddStarButton";
import { RemoveStarButton } from "./RemoveStarButton";

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
