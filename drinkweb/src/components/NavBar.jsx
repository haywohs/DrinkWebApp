import React, { useContext } from 'react'
import "./navBar.scss"
import { GiCoffeeCup } from "react-icons/gi";
import { HiUser, HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginContext } from '../context/LoginContext';
import { CartContext } from '../context/CartContext';


const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;   
`;
const CartCombo = styled.div`
    position:relative;
`
const CartNum = styled.div`
    position:absolute;
    top:5px;

`

const NavBar = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(LoginContext);

    const {cartItems} =useContext(CartContext);
    //console.log(cartItems)
    

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
                        <LinkNew to='/' ><div className='logo' /></LinkNew>
                    </div>
                    <div className='right'>
                        <LinkNew to='/cart'>
                            <CartCombo>
                            <GiCoffeeCup size={35} />{cartItems.length>0 && (<CartNum>{cartItems.length}</CartNum>)}
                            </CartCombo>
                        </LinkNew>
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