import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectUser from "./SelectUser";
import Cards from "./Cards";
import "./App.scss";
import { Link } from "react-router-dom";

function App() {
 return (
  <Router>
   <div className="App">
    <header className="App-header">
     <Link to="/">
      <h1>FlashCard-Demo</h1>
     </Link>
    </header>
    <main className="App-body">
     <Switch>
      <Route path="/cards">
       <Cards />
      </Route>
      <Route path="/">
       <SelectUser />
      </Route>
     </Switch>
    </main>
   </div>
  </Router>
 );
}

export default App;
