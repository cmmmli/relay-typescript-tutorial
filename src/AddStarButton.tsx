import React from "react";
import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import type {
  AddStarButtonMutation,
  AddStarButtonMutationVariables,
} from "./__generated__/AddStarButtonMutation.graphql";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export const AddStarButton = ({
  input: { starrableId },
}: AddStarButtonMutationVariables) => {
  const [commit, isInFlight] = useMutation<AddStarButtonMutation>(graphql`
    mutation AddStarButtonMutation($input: AddStarInput!) {
      addStar(input: $input) {
        starrable {
          viewerHasStarred
        }
      }
    }
  `);

  return (
    <Button
      disabled={isInFlight}
      onClick={(e) => {
        e.stopPropagation();
        commit({
          variables: {
            input: {
              starrableId,
            },
          },
        });
      }}
    >
      <StarOutlineIcon />
    </Button>
  );
};
