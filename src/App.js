import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "./users/pages/Users";

function App() {
  return (
    <Router>
      <Users></Users>
    </Router>
  );
}

export default App;
