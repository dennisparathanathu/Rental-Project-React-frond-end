import React from 'react'   
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../images/logo1.jpg';
import "../StyleSheet/Header.css";

const Header = () => {
    return (
        <div className="Header__container">
            <div className="Header__leftContainer">
                <Link to="/">
                <img src={Logo} alt="rental-logo" className="Header__leftContainerLogo"/>
                </Link>
            </div>
            <div className="Header__centerContainer">
                <input type="text" placeholder="Find cameras, tripodes, laptops" className="Header__centerContainerInput"/>
                <SearchIcon className="Header__centerContainerIcon"/>
            </div>
            <div className="Header__rightContainer">
                <Link to="">
                <h4 className="Header__rightContainerText">Login</h4>
                </Link>
                <Link to="/add-product0">
                <button className="Header__rightContainerbutton">Rent</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
