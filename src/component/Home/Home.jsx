import React from 'react';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import Donation from '../Donation/Donation';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const categories = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Category categories={categories}></Category>
            <Donation></Donation>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;