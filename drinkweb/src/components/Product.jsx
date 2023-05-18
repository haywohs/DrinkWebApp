import React, { useContext, useState } from 'react'
import "./product.scss"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import { LoginContext } from '../context/LoginContext.js'




const Product = () => {

    const navigate = useNavigate();

    //get ID from url
    const drinkUrl = useLocation();
    const drinkId = drinkUrl.pathname.split("/")[2];

    //use ID to get the drink details
    const { data, loading, error } = useFetch(`/drinkList/drink/${drinkId}`);
    console.log(data);

    const { user } = useContext(LoginContext);

    //set up customize
    const [pop, setPop] = useState(false);
    const [iceSelected, setIceSelected] = useState("");
    const [sweetSelected, setSweetSelected] = useState("");

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (user) {
            //使購物車+1 應跳轉回Menu
            navigate('/productList');
            console.log(user);
        } else {
            navigate('/login');
        }
    }
    const handleIceChange = (e) => {
        setIceSelected(e.target.value);
    }
    const handleSweetChange = (e) => {
        setSweetSelected(e.target.value);
    }



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
                        <img src={data.photos[0]} alt="1" />
                        <div className='popoptions'>
                            <div className='poptitle'>
                                <p>{data.name}</p>
                                <AiOutlineCloseCircle size="25px" onClick={Quit} />
                            </div>
                            <div className="ice">
                                Iceness
                                <div className='options'>
                                    <input type='radio' value='extra' onChange={handleIceChange} checked={iceSelected === 'extra'} />Extra Ice
                                </div>
                                <div className='options'>
                                    <input type='radio' value='ice' checked={iceSelected === 'ice'} onChange={handleIceChange} />Ice
                                </div>
                                <div className='options'>
                                    <input type='radio' value='cold' checked={iceSelected === 'cold'} onChange={handleIceChange} />Cold
                                </div>
                                <div className='options'>
                                    <input type='radio' value='warm' checked={iceSelected === 'warm'} onChange={handleIceChange} />Warm
                                </div>
                                <div className='options'>
                                    <input type='radio' value='hot' checked={iceSelected === 'hot'} onChange={handleIceChange} />Hot
                                </div>
                            </div>
                            <div className='sweet'>
                                Sweetness
                                <div className='options'>
                                    <input type='radio' value='100' checked={sweetSelected === '100'} onChange={handleSweetChange} />100%
                                </div>
                                <div className='options'>
                                    <input type='radio' value='70' checked={sweetSelected === '70'} onChange={handleSweetChange} />70%
                                </div>
                                <div className='options'>
                                    <input type='radio' value='50' checked={sweetSelected === '50'} onChange={handleSweetChange} />50%
                                </div>
                                <div className='options'>
                                    <input type='radio' value='30' checked={sweetSelected === '30'} onChange={handleSweetChange} />30%
                                </div>
                                <div className='options'>
                                    <input type='radio' value='10' checked={sweetSelected === '10'} onChange={handleSweetChange} />10%
                                </div>
                                <div className='options'>
                                    <input type='radio' value='0' checked={sweetSelected === '0'} onChange={handleSweetChange} />No Sugar
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
                                    <option default>Select alternative option</option>
                                    <option value="remove">Remove it from my order list</option>
                                    <option value="cancel">Cancel the whole order</option>
                                    <option value="call">Call me</option>
                                </select>
                            </div>
                            <button className='addproduct' onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            }
            <div className='product'>
                <div className='product__container'>
                    <div className='line1'>
                        <img src={data.photos?.[0]} alt={data.name} />
                        <div className='line1__desc'>
                            <p id="productNm" >{data.name}</p>
                            <p id="productDesc">{data.description}</p>
                            <div className='options'>
                                <div className='condition'>${data.price}
                                    <div className='quantity'>
                                        <button className='quantity__Btn'>-</button>
                                        <span className='number'>1</span>
                                        <button className='quantity__Btn'>+</button>
                                    </div>
                                </div>
                                <div className='customize'>
                                    <button className='customize__Btn' onClick={PopUp} >Customize</button>
                                    <button className='customize__Btn' onClick={handleAddToCart}>Add To Cart</button>
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