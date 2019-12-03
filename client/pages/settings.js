import Layout from '../components/Layout';
import { useFetchUser } from '../utils/auth0';

import '../styles/index.css';

const Settings = () => {
  const { user, loading } = useFetchUser({ required: true });
  return (
    <Layout user={user} loading={loading}>
      <div className="p-4 shadow rounded card--padded">
        <img className="rounded-lg md:w-56" src={user ? user.picture : ''} alt="your profile" />
        <h1 className="text-purple-500 leading-normal">Welcome {user ? user.given_name : ''}!</h1>
        <p className="text-gray-500 mb-5">This is a secure settings page</p>
        <a
          className="btn-danger hover:bg-red-500 hover:text-white hover:border-transparent"
          href="/api/auth/logout"
        >
          Logout
        </a>
      </div>
    </Layout>
  );
};

export default Settings;
