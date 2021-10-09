import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import type {
  RemoveStarButtonMutation,
  RemoveStarButtonMutationVariables,
} from "./__generated__/RemoveStarButtonMutation.graphql";

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

  if (isInFlight) {
    return <button disabled>☆</button>;
  }

  return (
    <button
      onClick={() => {
        commit({
          variables: {
            input: {
              starrableId,
            },
          },
        });
      }}
    >
      ★
    </button>
  );
};
