import React from "react";
import "./App.css";
import { graphql } from "react-relay";
import {
  PreloadedQuery,
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";

import { AppViewerRepositoriesNameQuery } from "./__generated__/AppViewerRepositoriesNameQuery.graphql";
import { RepositoryList } from "./components/features/RepositoryList";
import RelayEnvironment from "./lib/react-relay/RelayEnvironment";

const { Suspense } = React;

const ViewerRepositoriesNameQuery = graphql`
  query AppViewerRepositoriesNameQuery {
    viewer {
      login
      ...RepositoryList_owner
    }
  }
`;

const preloadedQuery = loadQuery<AppViewerRepositoriesNameQuery>(
  RelayEnvironment,
  ViewerRepositoriesNameQuery,
  {}
);

type Props = {
  queryRef: PreloadedQuery<AppViewerRepositoriesNameQuery>;
};

function App(props: Props) {
  const data = usePreloadedQuery<AppViewerRepositoriesNameQuery>(
    ViewerRepositoriesNameQuery,
    props.queryRef
  );

  return (
    <div className="App">
      <header className="App-header">
        {data.viewer.login}
        <RepositoryList owner={data.viewer} />
      </header>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App queryRef={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
