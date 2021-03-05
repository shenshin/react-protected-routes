import { Link } from 'react-router-dom';
import image from './middle-earth-map.jpg';
// Component on the protected route
const MiddleEarthMap = ({ handleLogout }) => (
  <div>
    <h1>Middle-Earth Map</h1>
    <img style={{ height: '50vh', display: 'block', margin: 'auto' }} src={image} alt="Middle-Earth" />
    <button
      type="button"
      onClick={handleLogout}
    >
      Log Out
    </button>
    <p><Link to="/">Back to Home</Link></p>
  </div>
);

export default MiddleEarthMap;
