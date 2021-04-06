import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, NavBar } from "./components";
import { CubeTurn } from "./pages";

function App() {
  return (
    <div className="flex flex-col HoneyYellow text-white">
      <Header />
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/CubeTurn">
              <CubeTurn />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
