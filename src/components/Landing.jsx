import { Link } from 'react-router-dom';
// Log-in page component
const Landing = ({
  isAuthenticated,
  setAuthenticationToOpposite,
}) => (
  <div>
    <h1>Welcome to Middle-Earth!</h1>
    <h3><Link to="/map">Explore the map</Link></h3>
    <p>{isAuthenticated ? 'You are LOGGED in' : 'You are NOT logged in'}</p>
    <button
      type="button"
      onClick={setAuthenticationToOpposite}
    >
      {`Log ${isAuthenticated ? 'out' : 'in'}`}
    </button>
  </div>
);

export default Landing;
