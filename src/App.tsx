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
import { AppRepositoryNameQuery } from "./__generated__/AppRepositoryNameQuery.graphql";

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      nameWithOwner
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryNameQuery>(
  RelayEnvironment,
  RepositoryNameQuery,
  {
    owner: "cmmmli",
    name: ".dotfiles",
  }
);

type Props = {
  queryRef: PreloadedQuery<AppRepositoryNameQuery>;
};

function App(props: Props): JSX.Element {
  const data = usePreloadedQuery<AppRepositoryNameQuery>(
    RepositoryNameQuery,
    props.queryRef
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository?.name}</p>
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
