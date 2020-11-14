import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { setContext } from "apollo-link-context";
import App from "./App";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import BACK_URI from "./config";

const httpLink = new HttpLink({ uri: BACK_URI });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
