import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import type {
  RemoveStarButtonMutation,
  RemoveStarButtonMutationVariables,
} from "~/src/__generated__/RemoveStarButtonMutation.graphql";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const RemoveStarButton = ({
  input: { starrableId },
}: RemoveStarButtonMutationVariables) => {
  const [commit, isInFlight] = useMutation<RemoveStarButtonMutation>(graphql`
    mutation RemoveStarButtonMutation($input: RemoveStarInput!) {
      removeStar(input: $input) {
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
      <StarIcon />
    </Button>
  );
};
