import React, { useContext } from 'react'
import "./navBar.scss"
import { GiCoffeeCup } from "react-icons/gi";
import { HiUser, HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginContext } from '../context/LoginContext';


const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;   
`;

const NavBar = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(LoginContext);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: "logout" });
        navigate("/");
    }

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
                        <Link to='/cart'>
                            <button className='rightBtn_cart'><GiCoffeeCup size={35} /></button>
                        </Link>
                        {user ?
                            <>
                                <Link to='/member'>
                                    <button className='rightBtn_user'><HiUser size={35} /></button>
                                </Link>
                                <span><button className='out' onClick={handleClick}><HiOutlineLogout style={{ margin: "0 auto" }} size={20} />OUT</button></span>
                            </>
                            :
                            <Link to='/login'>
                                <button className='rightBtn_user'><HiOutlineUser size={32} style={{ paddingTop: "5px" }} /></button>
                            </Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;