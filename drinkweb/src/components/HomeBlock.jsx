import React from 'react'
import "./homeblock.scss"

const HomeBlock = () => {
    return (
        <>
            <div className='homeblock'>
                <div className='blockContainer'>
                    <div className='block1'>
                        <p className='block1__des'>
                            Start fresh with Drink Rewards.<br />
                            Jion today to earn your way to free drinks.
                        </p>
                    </div>
                    <div className='block2'>
                        <div className='block2__wrapper'>
                            <button className='popDrink' />
                            <p className='popDrink__des'>Description for pop drink.</p>
                        </div>
                    </div>
                    <div className='block3'>
                        <div className='map' >
                            <button className='map__btn'>Find a Store</button>
                        </div>
                    </div>
                    {/* <button className='menuBtn'>MENU</button> */}
                </div>
            </div>
        </>
    )
}

export default HomeBlock;