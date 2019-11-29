import Layout from '../components/Layout';

import '../styles/index.css';

const Index = () => (
  <Layout>
    <div className="p-4 shadow rounded card--padded">
      <h1 className="text-purple-500 leading-normal">Next.js</h1>
      <p className="text-gray-500">with Tailwind CSS</p>
    </div>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Index;
