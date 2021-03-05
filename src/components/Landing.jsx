import { Link } from 'react-router-dom';

const Landing = ({ isAuthenticated, changeAuthentication }) => (
  <div>
    <h1>Landing</h1>
    <p><Link to="/dashboard">View Dashboard</Link></p>
    <p>{isAuthenticated ? 'You are LOGGED in' : 'You are NOT logged in'}</p>
    <button
      type="button"
      onClick={changeAuthentication}
    >
      {`Log ${isAuthenticated ? 'out' : 'in'}`}
    </button>
  </div>
);

export default Landing;
