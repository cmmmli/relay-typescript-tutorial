import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { RepositoryNamesComponent_owner$key } from "./__generated__/RepositoryNamesComponent_owner.graphql";
import { AddStarButton } from "./AddStarButton";
import { RemoveStarButton } from "./RemoveStarButton";

type Props = {
  owner: RepositoryNamesComponent_owner$key;
};

export const RepositoryNamesComponent = ({ owner }: Props) => {
  const data = useFragment(
    graphql`
      fragment RepositoryNamesComponent_owner on User
      @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
        repositories(first: $first) {
          edges {
            node {
              id
              name
              viewerHasStarred
            }
          }
        }
      }
    `,
    owner
  );

  const repositories = data.repositories.edges
    ?.filter((edge): edge is NonNullable<typeof edge> => edge != null)
    .map((edge) => (
      <li key={edge.node?.id}>
        {edge.node?.name}{" "}
        {edge.node?.viewerHasStarred ? (
          <RemoveStarButton input={{ starrableId: edge.node?.id || "" }} />
        ) : (
          <AddStarButton input={{ starrableId: edge.node?.id || "" }} />
        )}
      </li>
    ));

  return <ul className="repositories">{repositories}</ul>;
};
