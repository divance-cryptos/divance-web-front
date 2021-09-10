import { Route } from "wouter";
import Home from "../src/pages/Home";

const App = () => {
  return (
    <div className="App">
      <Route component={Home} path="/"></Route>
    </div>
  );
};

export default App;
