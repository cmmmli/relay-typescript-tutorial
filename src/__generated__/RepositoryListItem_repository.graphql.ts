/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RepositoryListItem_repository = {
    readonly id: string;
    readonly name: string;
    readonly viewerHasStarred: boolean;
    readonly issues: {
        readonly totalCount: number;
    };
    readonly " $fragmentRefs": FragmentRefs<"IssueList_repository">;
    readonly " $refType": "RepositoryListItem_repository";
};
export type RepositoryListItem_repository$data = RepositoryListItem_repository;
export type RepositoryListItem_repository$key = {
    readonly " $data"?: RepositoryListItem_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoryListItem_repository">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItem_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "IssueConnection",
      "kind": "LinkedField",
      "name": "issues",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "issues(first:10)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueList_repository"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = 'c92af64d6bd047e485632980003231d8';
export default node;
