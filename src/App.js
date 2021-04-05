import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
console.log(Router, Route, Switch);

function App() {
  return <Home />;
}

export default App;
