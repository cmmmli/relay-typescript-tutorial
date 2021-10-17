import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { AppViewerRepositoriesNameQuery } from "./__generated__/AppViewerRepositoriesNameQuery.graphql";
import { RepositoryList } from "./RepositoryList";

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
  {
    owner: "cmmmli",
    name: ".dotfiles",
  }
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
