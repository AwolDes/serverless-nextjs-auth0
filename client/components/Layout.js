import PropTypes from 'prop-types';
import Header from './Header';
import Spinner from './Spinner';

const Layout = ({ children, loading, user }) => (
  <div>
    <Header user={user} />
    {loading && !user ? <Spinner /> : children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

Layout.defaultProps = {
  user: {}
};

export default Layout;
