import Account from './Account';

import logo from '../../assets/images/logo.png';
import classes from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href='index.html' className={classes.brand}>
            <img src={logo} alt='Learn With Quiz Logo' />
            <h3>Learn With Quiz</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
