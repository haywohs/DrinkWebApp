import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import "./register.scss"
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const LinkNew = styled(Link)`
    text-decoration:none;
    color:black;
    font-weight:bold;
    font-size:14px;
    padding-top:10px;
`




const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    });

    const [wrongMessage, setWrongMessage] = useState("");

    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("/auth/register", registerData);
            navigate("/login", resp);
        }
        catch (error) {
            setWrongMessage(error.response.data.message);
        }
    }


    const handleData = (e) => {
        setRegisterData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    return (
        <>
            <div className='register'>
                <NavBar />
                <div className='registerContainer'>
                    <div className='wrapper'>
                        <img src='' alt='' />
                        <div className='create'>Create Account</div>
                        <div className='form'>
                            <input type='text' placeholder='Username' id='username' onChange={handleData} />
                            <input type='email' placeholder='Email' id='email' onChange={handleData} />
                            <input type='password' placeholder='Password' id='password' onChange={handleData} />
                            {wrongMessage && <span style={{ color: "red", textAlign: "center" }}>{wrongMessage}</span>}
                            {/* the display is html not json */}
                            <button className='submit' onClick={handleClick} >Sign Up</button>
                            <LinkNew to='/question' >QA Problem?</LinkNew>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;