/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppViewerRepositoriesNameQueryVariables = {};
export type AppViewerRepositoriesNameQueryResponse = {
    readonly viewer: {
        readonly login: string;
        readonly " $fragmentRefs": FragmentRefs<"RepositoryList_owner">;
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
    ...RepositoryList_owner
    id
  }
}

fragment IssueList_repository on Repository {
  issues(first: 10) {
    edges {
      node {
        id
        title
        bodyText
      }
    }
  }
}

fragment RepositoryListItem_repository on Repository {
  id
  name
  viewerHasStarred
  issues(first: 10) {
    totalCount
  }
  ...IssueList_repository
}

fragment RepositoryList_owner on User {
  repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
    edges {
      node {
        id
        ...RepositoryListItem_repository
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
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
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "UPDATED_AT"
    }
  }
],
v2 = {
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
            "name": "RepositoryList_owner"
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
            "args": (v1/*: any*/),
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
                      (v2/*: any*/),
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "IssueEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Issue",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "bodyText",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "issues(first:10)"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
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
            "storageKey": "repositories(first:5,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [
              "orderBy"
            ],
            "handle": "connection",
            "key": "ReposiroyList_owner_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "792e60adbd4dba26b98088096d04af2d",
    "id": null,
    "metadata": {},
    "name": "AppViewerRepositoriesNameQuery",
    "operationKind": "query",
    "text": "query AppViewerRepositoriesNameQuery {\n  viewer {\n    login\n    ...RepositoryList_owner\n    id\n  }\n}\n\nfragment IssueList_repository on Repository {\n  issues(first: 10) {\n    edges {\n      node {\n        id\n        title\n        bodyText\n      }\n    }\n  }\n}\n\nfragment RepositoryListItem_repository on Repository {\n  id\n  name\n  viewerHasStarred\n  issues(first: 10) {\n    totalCount\n  }\n  ...IssueList_repository\n}\n\nfragment RepositoryList_owner on User {\n  repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        ...RepositoryListItem_repository\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '3071a979a777f93e420fb7a6b50c8def';
export default node;
