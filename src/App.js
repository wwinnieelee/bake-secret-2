import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Menu from "./pages/Menu";
import IG from "./pages/Insta";
import Layout from "./components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Home />
      <Story />
      <Menu />
      <IG />
    </Layout>
  );
}

export default App;
