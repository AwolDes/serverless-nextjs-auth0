import Layout from '../components/Layout';
import { useFetchUser } from '../utils/auth0';

export default function About() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <div className="p-4 shadow rounded card--padded">
        <p>This is the about page</p>
      </div>
    </Layout>
  );
}
