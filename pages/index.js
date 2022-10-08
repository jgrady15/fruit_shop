import React from "react";

import { client } from '../lib/client';
import { Product, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
    return (
        <div>
            {/* <HeroBanner heroBanner={bannerData[1]} /> */}
            <div className="products-heading">
                <h2>Worlds Best Fruit Shop!</h2>
            </div>

            <div className="products-container">
                { products?.map((product) => <Product key={product._id} product={product} />) }
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const productQuery = "*[_type == 'product']";
    const products = await client.fetch(productQuery);
    console.log(products)

    const bannerQuery = "*[_type == 'banner']";
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }
}

export default Home;