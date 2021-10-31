import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Button } from "@mui/material";
import { FC } from "react";
import { graphql, useMutation } from "react-relay";

import type {
  AddStarButtonMutation,
  AddStarButtonMutationVariables,
} from "~/src/__generated__/AddStarButtonMutation.graphql";

type Props = AddStarButtonMutationVariables;

const mutation = graphql`
  mutation AddStarButtonMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;

export const AddStarButton: FC<Props> = ({ input }) => {
  const [commit, isInFlight] = useMutation<AddStarButtonMutation>(mutation);

  return (
    <Button
      disabled={isInFlight}
      onClick={(e) => {
        e.stopPropagation();
        commit({ variables: { input } });
      }}
    >
      <StarOutlineIcon />
    </Button>
  );
};
