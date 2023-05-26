import React from 'react'
import "./homeblock.scss"
import { Link } from 'react-router-dom'




const HomeBlock = () => {
    return (
        <>
            <div className='homeblock'>
                <div className='blockContainer'>
                    <div className='block1'>
                        <p className='block1__des'>
                            Start fresh with Drink Rewards.<br />
                            Join today to earn your way to free drinks.
                        </p>
                    </div>
                    <div className='circle1' />
                    <div className='block2'>
                        <div className='block2__wrapper'>
                            <button className='popDrink' />
                            <p className='popDrink__des'>Summer Cooooool drink coming</p>
                        </div>
                    </div>
                    <div className='circle2' />
                    <div className='block3'>
                        <div className='map' >
                            <button className='map__btn'>Find a Store</button>
                        </div>
                        <Link to="/productList">
                            <button className='menuBtn'  >MENU</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeBlock;