import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fetchGraphQL from "./fetchGraqhQL";

const { useState, useEffect } = React;

function App() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "cmmmli", name: ".dotfiles") {
          name
        }
      }
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        const data = response.data;
        setName(data.repository.name);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [name]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{name != null ? `Repository: ${name}` : "Loading"}</p>
      </header>
    </div>
  );
}

export default App;
