import React from "react";
import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import type {
  AddStarButtonMutation,
  AddStarButtonMutationVariables,
} from "./__generated__/AddStarButtonMutation.graphql";

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

  if (isInFlight) {
    return <button disabled>★</button>;
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
      ☆
    </button>
  );
};
