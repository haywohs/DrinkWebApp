import React from 'react'
import "./menu.scss"

const Menu = ({ data }) => {
    return (
        <>
            <div className='menu'>
                <div className='menu__container'>
                    <div className='box'>
                        {data.map((item, index) =>
                            <div className='item' key={index}>
                                <img src={item.img} alt="" />
                                <div className='itemTitle'>
                                    {item.name}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;