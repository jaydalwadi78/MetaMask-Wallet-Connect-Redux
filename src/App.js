import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import RoutesLink from "./routes/RoutesLink";

function App() {
  const history = createBrowserHistory();
  return (
    <Router>
      <RoutesLink />
    </Router>
  );
}

export default App;
