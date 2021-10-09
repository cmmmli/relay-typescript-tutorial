/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppViewerRepositoriesNameQueryVariables = {};
export type AppViewerRepositoriesNameQueryResponse = {
    readonly viewer: {
        readonly login: string;
        readonly " $fragmentRefs": FragmentRefs<"RepositoryNamesComponent_owner">;
    };
};
export type AppViewerRepositoriesNameQuery = {
    readonly response: AppViewerRepositoriesNameQueryResponse;
    readonly variables: AppViewerRepositoriesNameQueryVariables;
};



/*
query AppViewerRepositoriesNameQuery {
  viewer {
    login
    ...RepositoryNamesComponent_owner
    id
  }
}

fragment RepositoryNamesComponent_owner on User {
  repositories(first: 10) {
    edges {
      node {
        id
        name
        viewerHasStarred
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppViewerRepositoriesNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepositoryNamesComponent_owner"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppViewerRepositoriesNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
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
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerHasStarred",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:10)"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7d7c1167c0421f9dce3cab3477f64fe1",
    "id": null,
    "metadata": {},
    "name": "AppViewerRepositoriesNameQuery",
    "operationKind": "query",
    "text": "query AppViewerRepositoriesNameQuery {\n  viewer {\n    login\n    ...RepositoryNamesComponent_owner\n    id\n  }\n}\n\nfragment RepositoryNamesComponent_owner on User {\n  repositories(first: 10) {\n    edges {\n      node {\n        id\n        name\n        viewerHasStarred\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '67542f3a19e9df582c893699c603c3b8';
export default node;
