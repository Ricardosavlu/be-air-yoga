import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import Logo from '../../../assets/Logo.svg';
import Bars from '../../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 425 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="Home">
      <img src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            padding: '0.3rem',
            borderRadius: '5px',
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: '1', height: '1rem' }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="why-us"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="schedule"
              span={true}
              smooth={true}
            >
              Who We Are
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
