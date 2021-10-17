/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import RepositoryListPaginationQuery from "./RepositoryListPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type RepositoryList_owner = {
    readonly repositories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"RepositoryListItem_repository">;
            } | null;
        } | null> | null;
    };
    readonly id: string;
    readonly " $refType": "RepositoryList_owner";
};
export type RepositoryList_owner$data = RepositoryList_owner;
export type RepositoryList_owner$key = {
    readonly " $data"?: RepositoryList_owner$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoryList_owner">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": 5,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepositoryListPaginationQuery,
      "identifierField": "id"
    }
  },
  "name": "RepositoryList_owner",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "UPDATED_AT"
          }
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__ReposiroyList_owner_repositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RepositoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Repository",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RepositoryListItem_repository"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__ReposiroyList_owner_repositories_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = 'a6f83ea3ee870fa33ee712e4f8007b99';
export default node;
