import "./App.scss";

import React from "react";
import { HashRouter, Route } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SecondPage from "./SecondPage/SecondPage";

const App = () => {
  return (
    <div className="ui container">
      <HashRouter>
        <div>
          <HeaderMenu />
          <Route path="/" exact component={FirstPage} />
          <Route path="/second" exact component={SecondPage} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
