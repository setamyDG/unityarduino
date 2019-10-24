import React from 'react';
import Layout from '../layout/Layout';
import HomePage from '../renders/homepage/HomePage';
import DropDownMenu from '../navigation/DropDownMenu';

const Home = () => (

  <>
    <Layout>
      <HomePage />
        <DropDownMenu />
    </Layout>
  </>
);

export default Home;
