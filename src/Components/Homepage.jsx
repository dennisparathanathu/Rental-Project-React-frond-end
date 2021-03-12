import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Products from '../Components/Products'

const Homepage = () => {
    return (
        <div className="HomePage__container">
            <Header/>
            <Banner />
            <Products />
            
        </div>
    )
}

export default Homepage
