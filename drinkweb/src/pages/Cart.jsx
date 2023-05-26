import React from 'react'
import './cart.scss'
import NavBar from '../components/NavBar';

const Cart = () => {
    return (
        <>
            <div className='cart'>
                <NavBar />
                <div className='cartContainer'>
                    <h1>Cart</h1>
                    <div className='cartWrapper'>
                        <div className='cartTable'>
                            <div className='thead'>
                                <h4>PRODUCT</h4>
                                <h4>PRICE</h4>
                                <h4>QUANTITY</h4>
                                <h4>SUM</h4>
                            </div>
                            <div className='tbody'>
                                <div className='cartItem'>
                                    <div className='itemDetail'>
                                        <img src="" alt="" />
                                        <div className='itemText'>
                                            <h4>Name</h4>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                    <div className='itemPrice'>
                                        $ 4.6
                                    </div>
                                    <div className='itemQuantity'>
                                        <button>-</button>
                                        <h6>1</h6>
                                        <button>+</button>
                                    </div>
                                    <div className='itemSum'>
                                        $ 4.6
                                    </div>
                                </div>
                                <div className='cartItem'>
                                    <div className='itemDetail'>
                                        <img src="" alt="" />
                                        <div className='itemText'>
                                            <h4>Name</h4>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                    <div className='itemPrice'>
                                        $ 4.6
                                    </div>
                                    <div className='itemQuantity'>
                                        <button>-</button>
                                        <h6>1</h6>
                                        <button>+</button>
                                    </div>
                                    <div className='itemSum'>
                                        $ 4.6
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='subTable'>
                            <div className='subtotal'>
                                <h5>Subtotal</h5>
                                <p>$12.4</p>
                            </div>
                            <div className='discount'>
                                <h5>Discount</h5>
                                <p>-$0.4</p>
                            </div>
                            <hr />
                            <div className='total'>
                                <h5>Total</h5>
                                <p>$11.9</p>
                            </div>
                            <button className='checkout'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;