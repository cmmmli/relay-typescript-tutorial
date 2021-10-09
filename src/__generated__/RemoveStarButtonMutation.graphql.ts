/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type RemoveStarInput = {
    starrableId: string;
    clientMutationId?: string | null;
};
export type RemoveStarButtonMutationVariables = {
    input: RemoveStarInput;
};
export type RemoveStarButtonMutationResponse = {
    readonly removeStar: {
        readonly starrable: {
            readonly viewerHasStarred: boolean;
        } | null;
    } | null;
};
export type RemoveStarButtonMutation = {
    readonly response: RemoveStarButtonMutationResponse;
    readonly variables: RemoveStarButtonMutationVariables;
};



/*
mutation RemoveStarButtonMutation(
  $input: RemoveStarInput!
) {
  removeStar(input: $input) {
    starrable {
      __typename
      viewerHasStarred
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasStarred",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveStarButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveStarButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "41adb357472518c58c8a6f99d1a9b208",
    "id": null,
    "metadata": {},
    "name": "RemoveStarButtonMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveStarButtonMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ceed402e6c4f8d0dc1dc9fd2ed8a1d28';
export default node;
