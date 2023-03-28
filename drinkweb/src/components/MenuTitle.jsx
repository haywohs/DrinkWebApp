import React from 'react'
import "./menutitle.scss"
import Menu from "../subcomponents/Menu.jsx"
import { BiAperture, BiBarChartAlt2 } from 'react-icons/bi'
import { GiThreeLeaves, GiOrangeSlice, GiWinterHat } from 'react-icons/gi'
import { Products } from '../product'
import useFetch from '../hooks/useFetch.js'



const MenuTitle = () => {

    const { data, loading, error } = useFetch("/drinkList/drink/");
    console.log(data);
    return (
        <>
            <div className='menutitle'>
                <div className='menutitle__container'>
                    <div className='title'>
                        <div className='item'>
                            <BiBarChartAlt2 />
                            <span>All</span>
                        </div>
                        <div className='item active'>
                            <BiAperture />
                            <span>New</span>
                        </div>
                        <div className='item'>
                            <GiThreeLeaves />
                            <span>Tea</span>
                        </div>
                        <div className='item'>
                            <GiOrangeSlice />
                            <span>Fruit</span>
                        </div>
                        <div className='item'>
                            <GiWinterHat />
                            <span>Season</span>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='menu__block'>
                            <Menu data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuTitle;