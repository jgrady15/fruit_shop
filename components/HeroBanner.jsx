import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="fruits-standalone">{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <Image src={urlFor(heroBanner.image).url()} width={200} height={200} alt="fruits" className="hero-banner-image" />
                
                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type="button">{heroBanner.buttonText}</button>
                    </Link>
                    <div div className="desc">
                        <h5>All the fruits you can imagine!</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;