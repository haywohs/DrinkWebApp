import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import './login.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { LoginContext } from '../context/LoginContext.js'
import { login_failure, login_success, start_login } from '../constants/actionTypes.js'
import axios from 'axios'

const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;
    font-weight:bold;
    font-size:14px;
`;


const Login = () => {
    const navigate = useNavigate();

    //receive the data that navigated from register
    const registerSucess = useLocation();

    //temporary 
    const { loading, error, dispatch } = useContext(LoginContext);
    const [loadingData, setLoadingData] = useState({
        account: undefined,
        password: undefined
    });

    const handleInput = (e) => {
        setLoadingData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: start_login }); //loading will be true

        try {
            const resp = await axios.post('/auth/login', loadingData);
            //console.log(resp);
            dispatch({ type: login_success, payload: resp.data.userDetails });
            navigate("/");

        } catch (error) {
            dispatch({ type: login_failure, payload: error.response.data.message })
            //console.log(error.response.data.message)
        }

    }

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
                            <input type='text' placeholder='account' id='account' onChange={handleInput} />
                            <input type='password' placeholder='password' id='password' onChange={handleInput} />
                            <LinkNew to="/" style={{ marginLeft: "45px" }}>Forget password?</LinkNew>
                            <button className='submit' onClick={handleClick}>Sign In</button>
                            <div className='registerLink'>
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