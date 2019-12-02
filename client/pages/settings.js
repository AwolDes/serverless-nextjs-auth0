import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import auth0 from '../utils/auth0';

import '../styles/index.css';

const Settings = ({ user }) => (
  <Layout>
    <div className="p-4 shadow rounded card--padded">
      <img className="rounded-lg md:w-56" src={user.user.picture} alt="your profile" />
      <h1 className="text-purple-500 leading-normal">Welcome {user.user.given_name}!</h1>
      <p className="text-gray-500 mb-5">This is a secure settings page</p>
      <a
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        href="/api/auth/logout"
      >
        Logout
      </a>
    </div>
  </Layout>
);

Settings.getInitialProps = async ({ req, res }) => {
  if (typeof window === 'undefined') {
    const user = await auth0.getSession(req);
    if (!user) {
      res.writeHead(302, {
        Location: '/api/auth/login'
      });
      res.end();
      return {};
    }

    return { user };
  }
  return {};
};

Settings.propTypes = {
  user: PropTypes.object.isRequired
};

export default Settings;
