import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  isAuthenticated, path, children,
}) => (
  <Route exact path={path}>
    {isAuthenticated
      ? children
      : (
        <Redirect to="/unauthorized" />
      )}
  </Route>
);

export default ProtectedRoute;
