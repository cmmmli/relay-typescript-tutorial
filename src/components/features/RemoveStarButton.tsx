import { FC } from "react";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import type {
  RemoveStarButtonMutation,
  RemoveStarButtonMutationVariables,
} from "~/src/__generated__/RemoveStarButtonMutation.graphql";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type Props = RemoveStarButtonMutationVariables;

const mutation = graphql`
  mutation RemoveStarButtonMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;

export const RemoveStarButton: FC<Props> = ({ input }) => {
  const [commit, isInFlight] = useMutation<RemoveStarButtonMutation>(mutation);

  return (
    <Button
      disabled={isInFlight}
      onClick={(e) => {
        e.stopPropagation();
        commit({ variables: { input } });
      }}
    >
      <StarIcon />
    </Button>
  );
};
