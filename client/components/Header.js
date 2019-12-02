import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <a href="/" style={linkStyle}>Home</a>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <a href="/settings" style={linkStyle}>Settings</a>
  </div>
);

export default Header;
