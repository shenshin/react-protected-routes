import { Link } from 'react-router-dom';
import style from './Unauthorized.module.scss';
// page being shown to unauthorized visitors
const Unauthorized = () => (
  <div className={style.container}>
    <div className={style.gandalf}>
      <div className={style.fireball} />
      <div className={style.skirt} />
      <div className={style.sleeves} />
      <div className={style.shoulders}>
        <div className={`${style.hand} ${style.left}`} />
        <div className={`${style.hand} ${style.right}`} />
      </div>
      <div className={style.head}>
        <div className={style.hair} />
        <div className={style.beard} />
      </div>
    </div>
    <div className="message">
      <h1>403 - You Shall Not Pass</h1>
      <p>
        Uh oh, Gandalf is blocking the way!
        <br />
        Maybe you have a typo in the url?
        Or you meant to go to a different location? Like...Hobbiton?
      </p>
    </div>
    <p><Link to="/">Back to Home</Link></p>
  </div>
);

export default Unauthorized;
