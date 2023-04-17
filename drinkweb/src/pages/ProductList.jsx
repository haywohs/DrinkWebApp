import React from 'react'
import NavBar from '../components/NavBar';
import "./productList.scss"
import { BiAperture, BiBarChartAlt2 } from 'react-icons/bi'
import { GiThreeLeaves, GiMilkCarton, GiWinterHat } from 'react-icons/gi'
import Menu from '../components/Menu.jsx';
import useFetch from '../hooks/useFetch';

//fix the menu and connected to the specific drink page
const ProductList = () => {

    const { data, loading, error } = useFetch("/drinkList/drink");

    return (
        <>
            <div className='list'>
                <NavBar />
                <div className='listContainer'>
                    <div className='listWrapper'>
                        <div className='listTitle'>
                            <button className='listName'>
                                <BiBarChartAlt2 />
                                <span>All</span>
                            </button>
                            <button className='listName active'>
                                <BiAperture />
                                <span>New</span>
                            </button>
                            <button className='listName'>
                                <GiThreeLeaves />
                                <span>Tea</span>
                            </button>
                            <button className='listName'>
                                <GiMilkCarton />
                                <span>Milk</span>
                            </button>
                            <button className='listName'>
                                <GiWinterHat />
                                <span>Season</span>
                            </button>
                        </div>
                        <div className='listMenu'>
                            <Menu data={data} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;