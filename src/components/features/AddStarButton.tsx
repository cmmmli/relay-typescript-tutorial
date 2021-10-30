import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import type {
  AddStarButtonMutation,
  AddStarButtonMutationVariables,
} from "~/src/__generated__/AddStarButtonMutation.graphql";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import { FC } from "react";

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
