import React, { useState } from 'react'
import "./product.scss"
import { AiOutlineCloseCircle } from 'react-icons/ai'




const Product = () => {

    const [pop, setPop] = useState(false);

    const PopUp = () => {
        setPop(true);
    }
    const Quit = () => {
        setPop(false);
    }

    return (
        <>
            {pop &&
                <div className='popWindow'>
                    <div className='popWrapper'>
                        <img src="https://img.etimg.com/photo/95652431/95652431.jpg" alt="1" />
                        <div className='popoptions'>
                            <div className='poptitle'>
                                <p>Product Name</p>
                                <AiOutlineCloseCircle size="25px" onClick={Quit} />
                            </div>
                            <div className="ice">
                                Iceness
                                <div className='options'>
                                    <input type='checkbox' value='extra' />Extra Ice
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='ice' />Ice
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='cold' />Cold
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='warm' />Warm
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='hot' />Hot
                                </div>
                            </div>
                            <div className='sweet'>
                                Sweetness
                                <div className='options'>
                                    <input type='checkbox' value='100' />100%
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='70' />70%
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='50' />50%
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='30' />30%
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='10' />10%
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='0' />No Sugar
                                </div>
                            </div>
                            <div className='topping'>
                                Toppings
                                <div className='options'>
                                    <input type='checkbox' value='bubble' />Bubble
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='jelly' />Jelly
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='redbeen' />Red Bean
                                </div>
                                <div className='options'>
                                    <input type='checkbox' value='brownsugar' />Brown Sugar
                                </div>
                            </div>
                            <div className='preference'>
                                <p>Preference</p>
                                <textarea row="6" cols="50" placeholder=' e.g. No straw' />
                            </div>
                            <div className='error'>
                                <p>If this product is not available</p>
                                <select>
                                    <option value="remove">Remove it from my order list</option>
                                    <option value="cancel">Cancel the whole order</option>
                                    <option value="call">Call me</option>
                                </select>
                            </div>
                            <button className='addproduct'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            }
            <div className='product'>
                <div className='product__container'>
                    <div className='line1'>
                        {/* <img src={data.tmg} alt={data.name} /> */}
                        <img src="https://img.etimg.com/photo/95652431/95652431.jpg" alt="1" />
                        <div className='line1__desc'>
                            <p id="productNm" >Product Name</p>
                            <p id="productDesc">Description</p>
                            <div className='options'>
                                <div className='condition'>$50
                                    <div className='quantity'>
                                        <button className='quantity__Btn'>-</button>
                                        <span className='number'>1</span>
                                        <button className='quantity__Btn'>+</button>
                                    </div>
                                </div>
                                <div className='customize'>
                                    <button className='customize__Btn' onClick={PopUp} >Customize</button>
                                    <button className='customize__Btn'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='line2'>
                        <div className='recommend'>Top 3 For You</div>
                        <div className='recommendOptions'>
                            <img src='https://img.etimg.com/photo/95652431/95652431.jpg' alt='2' />
                            <img src='https://img.etimg.com/photo/95652431/95652431.jpg' alt='2' />
                            <img src='https://img.etimg.com/photo/95652431/95652431.jpg' alt='2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;