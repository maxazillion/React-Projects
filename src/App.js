import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, NavBar } from "./components";
import { CubeTurn, MorseCode } from "./pages";

function App() {
  return (
    <div className="flex flex-col BGP min-w-full min-h-screen fixed text-white">
      <Header />
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/CubeTurn">
              <CubeTurn />
            </Route>
          </Switch>
          <Switch>
            <Route path="/MorseCode">
              <MorseCode />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
