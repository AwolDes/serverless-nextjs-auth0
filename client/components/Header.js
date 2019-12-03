import Link from 'next/link';
import PropTypes from 'prop-types';

const linkStyle = {
  marginRight: 15
};

const Header = ({ user }) => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    {user && (
      <Link href="/settings">
        <a style={linkStyle}>Settings</a>
      </Link>
    )}
  </div>
);

Header.propTypes = {
  user: PropTypes.object,
};

Header.defaultProps = {
  user: {}
};

export default Header;
