import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
