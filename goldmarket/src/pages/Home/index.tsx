import React from 'react';
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <Layout NavBarComponent={<Navbar/>}>
            <div>This is Home Page</div>
        </Layout>
    );
};

export default Home;