import Link from 'next/link';
import PropTypes from 'prop-types';
import auth0 from '../utils/auth0';
import Layout from '../components/Layout';

import '../styles/index.css';

const Index = ({ authenticated }) => (
  <Layout>
    <div className="p-4 shadow rounded card--padded">
      <h1 className="text-purple-500 leading-normal">Next.js</h1>
      <p className="text-gray-500">with Tailwind CSS</p>
      <br />
      {!authenticated ? (
        <a
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          href="/api/auth/login"
        >
          Login
        </a>
      ) : (
        <a href="/settings" className="underline text-blue-500 hover:text-blue-700">Settings</a>
      )}
    </div>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const user = await auth0.getSession(req);
    if (!user) {
      return { authenticated: false };
    }

    return { authenticated: true };
  }
  return {};
};

Index.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

export default Index;
