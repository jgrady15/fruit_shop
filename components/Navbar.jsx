import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai';
// import { Cart } from './';
// import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Fruit Shop</Link>
            </p>
        </div>
    )
}

export default Navbar;
