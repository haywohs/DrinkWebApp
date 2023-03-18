import React from 'react'
import "./navBar.scss"
import { GiCoffeeCup } from "react-icons/gi";
import { HiUser } from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;   
`;

const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navContainer'>
                    <div className='left'>
                        <button className='leftBtn'>
                            <div className='leftBtn__burger'></div>
                            <div className='leftBtn__burger'></div>
                            <div className='leftBtn__burger'></div>
                        </button>
                    </div>
                    <div className='middle'>
                        <LinkNew to='/' ><span className='logo'>Drink.Booking</span></LinkNew>
                    </div>
                    <div className='right'>
                        <button className='rightBtn_cart'><GiCoffeeCup size={35} /></button>
                        <Link to='/login'>
                            <button className='rightBtn_user'><HiUser size={35} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;