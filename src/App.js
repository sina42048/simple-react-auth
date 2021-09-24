import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container center gap">
            <Login />
          </div>
        </Route>
        <Route path="/register">
          <div className="container center gap">
            <Register />
          </div>
        </Route>
        <Route path="/profile">
          <div className="container center gap">
            <Profile />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;