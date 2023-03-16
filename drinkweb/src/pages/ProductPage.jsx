import React from 'react'
import './productPage.scss'
import NavBar from '../components/NavBar.jsx';
import Product from '../components/Product.jsx';

const ProductPage = () => {
    return (
        <>
            <div className='productPage'>
                <NavBar />
                <Product />
            </div>
        </>
    )
}

export default ProductPage;