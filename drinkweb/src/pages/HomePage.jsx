import React from 'react'
import Navbar from "../components/NavBar.jsx";
import "./homePage.scss";
import Block from "../components/HomeBlock.jsx";

const HomePage = () => {
    return (
        <>
            <div className="home">
                <Navbar />
                <Block />
            </div>
        </>
    )
}

export default HomePage;