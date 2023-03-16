import React from 'react'
import NavBar from '../components/NavBar'
import './login.scss'

const Login = () => {
    return (
        <>
            <div className='login'>
                <NavBar />
                <div className='wrapper'>
                    <h2 className='title'>Sign In</h2>
                    <div className='form'>
                        <input type='text' placeholder='username' />
                        <input type='password' placeholder='password' />
                        <button>Sign</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;