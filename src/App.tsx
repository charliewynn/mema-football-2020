import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Foo from "./Components/FooComponent";
import Home from "./Components/HomeComponent";
import Login from "./Components/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header className="App-header">
          <Link className="HeaderLink" to="/">
            Mema Football Pool 2020
          </Link>
          <Link to="/foo">foo</Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
            props={{ title: "test" }}
            title="test2"
          />
          <Route exact path="/foo" component={Foo} />
          <Route exact path="/login" component={Login} />
          <Route
            render={() => (
              <div>
                404
                <div>
                  <Link to="/">Go Home</Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
