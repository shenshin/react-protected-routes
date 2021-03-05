import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from './App.module.css';
import Landing from './components/Landing';
import MiddleEarthMap from './components/MiddleEarthMap';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

// component with authentication state and the router
function App() {
  const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem('token') === 'my private token');

  function logIn() {
    setAuthenticated(true);
    localStorage.setItem('token', 'my private token');
  }
  function logOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
  }
  function setAuthenticationToOpposite() {
    if (isAuthenticated) {
      logOut();
    } else {
      logIn();
    }
  }

  return (
    <div className={style.App}>
      <Router>

        {/* Login page */}
        <Route exact path="/">
          <Landing
            isAuthenticated={isAuthenticated}
            setAuthenticationToOpposite={setAuthenticationToOpposite}
          />
        </Route>

        {/* Protected page */}
        <ProtectedRoute isAuthenticated={isAuthenticated} path="/map">
          <MiddleEarthMap handleLogout={logOut} />
        </ProtectedRoute>

        {/* Redirect for unauthorized users */}
        <Route exact path="/unauthorized">
          <Unauthorized />
        </Route>

      </Router>
    </div>
  );
}

export default App;
