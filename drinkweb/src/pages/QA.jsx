import React, { useState } from 'react'
import NavBar from '../components/NavBar.jsx';
import './qa.scss'
import Questions from '../components/Questions.jsx';
import { accountQA, contactQA, featuredQA, orderstatusQA, refundQA, rewardQA, shippingQA, systemQA } from '../questions.js';



const QA = () => {

    const [display, setDisplay] = useState("");

    const handleOnchange = (e) => {
        const value = e.target.value;
        switch (value) {
            case 'featured':
                setDisplay(<Questions qaArray={featuredQA} />);
                break;
            case 'shipping':
                setDisplay(<Questions qaArray={shippingQA} />);
                break;
            case 'orderStatus':
                setDisplay(<Questions qaArray={orderstatusQA} />);
                break;
            case 'contact':
                setDisplay(<Questions qaArray={contactQA} />);
                break;
            case 'reward':
                setDisplay(<Questions qaArray={rewardQA} />);
                break;
            case 'system':
                setDisplay(<Questions qaArray={systemQA} />);
                break;
            case 'refund':
                setDisplay(<Questions qaArray={refundQA} />);
                break;
            case 'account':
                setDisplay(<Questions qaArray={accountQA} />);
                break;
        }

    }




    return (
        <>
            <div className='question'>
                <NavBar />
                <div className='questionContainer'>
                    <div className='questionWrapper'>
                        <h1>What's the problems?</h1>
                        <div className='qaSearch'>
                            <select onChange={handleOnchange}>
                                <option value='default' active>
                                    Select your question topic
                                </option>
                                <option value='featured'>
                                    Featured Questions
                                </option>
                                <option value='shipping'>
                                    Shipping
                                </option>
                                <option value='orderStatus'>
                                    Order Status & Delivery
                                </option>
                                <option value='contact'>
                                    Contact Us
                                </option>
                                <option value='reward'>
                                    Reward
                                </option>
                                <option value='system'>
                                    System failure
                                </option>
                                <option value='refund'>
                                    Refund
                                </option>
                                <option value='account'>
                                    Account Questions
                                </option>
                            </select>
                        </div>
                        <div className='qaDisplay'>
                            <h2>{display}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QA;