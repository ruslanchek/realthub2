import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <ul>
      <li>
        <Link to="/">Go back to the homepage</Link>
      </li>
      <li>
        <Link to="/data/">Go to Data</Link>
      </li>
    </ul>
  </Layout>
);

export default SecondPage;
