import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'
import Skeleton from './Skeleton.jsx'

const Menu = ({ data, loading }) => {

    // const testloading = true;
    return (
        <>
            <div className='menu'>
                <div className='menu__container'>
                    {loading ? <Skeleton type="menu" length={8} /> :
                        <div className='box'>
                            {data.map((item, index) =>
                                <Link to={`/products/${item._id}`} key={index} style={{ textDecoration: "none", color: "black" }}>
                                    <div className='item' key={index}>
                                        <img src={item.photos[0]} alt={item.name} />
                                        <div className='itemTitle'>
                                            {item.name}
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default Menu;