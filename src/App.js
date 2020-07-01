import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/Abuot";
import Home from "./routes/Home";
import Navigator from "./components/Navigator";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
