import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
    const src = urlFor(image && image[0]).url()
    return (
        <div>
            <Link href={`/product/${slug.current}`} passHref>
                <div className="product-card">
                    <Image 
                        loader={() => src} 
                        src={src}
                        width={250}
                        height={250}
                        className="product-image"
                        alt="Next.js is not compatible with your system!"
                    />
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product;