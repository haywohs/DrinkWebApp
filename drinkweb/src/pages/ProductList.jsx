import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import "./productList.scss"
//import { BiAperture, BiBarChartAlt2 } from 'react-icons/bi'
//import { GiThreeLeaves, GiMilkCarton, GiWinterHat } from 'react-icons/gi'
import Menu from '../components/Menu.jsx';
import useListData from '../hooks/useListData';


const ProductList = () => {

    //default is all drinks
    const [list, setList] = useState("drink");

    const { listData, loading } = useListData(list);
    console.log(listData);

    return (
        <>
            <div className='list'>
                <NavBar />
                <div className='listContainer'>
                    <div className='listWrapper'>
                        <div className='listTitle'>
                            <button className='listName' id='drink' onClick={(e) => setList(e.target.id)}>
                                All
                            </button>
                            <button className='listName' id='list/New' >
                                New
                            </button>
                            <button className='listName' id='list/Tea' onClick={(e) => setList(e.target.id)}>
                                Tea
                            </button>
                            <button className='listName' id='list/Milk' onClick={(e) => setList(e.target.id)}>
                                Milk
                            </button>
                            <button className='listName' id='list/Season' onClick={(e) => setList(e.target.id)}>
                                Season
                            </button>
                        </div>
                        <div className='listMenu'>
                            <Menu data={listData} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;