import React from "react";

import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
    return (
        <div>
            <div className="products-heading">
                <h2>Best Selling Fruits!</h2>
            </div>

            <div className="products-container">
                { products?.map((product) => product.name) }
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }
}

export default Home;