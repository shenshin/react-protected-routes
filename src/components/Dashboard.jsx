import { Link } from 'react-router-dom';

const Dashboard = ({ handleLogout }) => (
  <div>
    <h1>Dashboard</h1>
    <p>Secret Page</p>
    <button
      type="button"
      onClick={handleLogout}
    >
      Log Out
    </button>
    <p><Link to="/">Back to Home</Link></p>
  </div>
);

export default Dashboard;
