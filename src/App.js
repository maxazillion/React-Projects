import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, NavBar } from "./components";
import { AboutMe, CubeTurn } from "./pages";

function App() {
  return (
    <div className="flex flex-col HoneyYellow">
      <Header />
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
          </Switch>
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
