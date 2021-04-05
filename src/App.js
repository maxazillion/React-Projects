import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, NavBar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
