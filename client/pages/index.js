import Link from 'next/link';
import Layout from '../components/Layout';
import { useFetchUser } from '../utils/auth0';

import '../styles/index.css';

const Index = () => {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <div className="p-4 shadow rounded card--padded">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
        <br />
        {!user ? (
          <a
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            href="/api/auth/login"
          >
              Login
          </a>
        ) : (
          <Link href="/settings">
            <a className="underline text-blue-500 hover:text-blue-700">Settings</a>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default Index;
