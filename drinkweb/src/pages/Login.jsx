import React from 'react'
import NavBar from '../components/NavBar'
import './login.scss'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;
    font-weight:bold;
    font-size:14px;
`;


const Login = () => {
    return (
        <>
            <div className='login'>
                <NavBar />
                <div className='logincontainer'>
                    <div className='wrapper'>
                        <img src="" alt="" />
                        <div className='welcome'>Welcome Back!!
                            <p>We would like to see you again</p></div>
                        <div className='form'>
                            <input type='text' placeholder='username' />
                            <input type='password' placeholder='password' />
                            <LinkNew to="/" style={{ marginLeft: "45px" }}>Forget password?</LinkNew>
                            <button className='submit'>Sign In</button>
                            <div className='register'>
                                Need an account?
                                <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                                    <span> REGISTER</span></Link><br />
                                <LinkNew to="/question" >QA Problem?</LinkNew>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;