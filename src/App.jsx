import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from './App.module.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

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
  function changeAuthentication() {
    if (isAuthenticated) {
      logOut();
    } else {
      logIn();
    }
  }

  return (
    <div className={style.App}>
      <Router>

        <Route exact path="/">
          <Landing
            isAuthenticated={isAuthenticated}
            changeAuthentication={changeAuthentication}
          />
        </Route>

        <ProtectedRoute isAuthenticated={isAuthenticated} path="/dashboard">
          <Dashboard handleLogout={logOut} />
        </ProtectedRoute>

        <Route exact path="/unauthorized">
          <Unauthorized />
        </Route>

      </Router>
    </div>
  );
}

export default App;
