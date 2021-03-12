import React from 'react'
import Bannerr from '../images/banner1.jpg';
import '../StyleSheet/Banner.css';
const Banner = () => {
    return (
        <div className="Banner__container">
            <div className="Banner">
                <img src={Bannerr} alt="Banner" className="HomeBanner"/>
            </div>
            <div className="Categories__available">
                <div className="Category__title">
                    <h2>All Categories</h2>
                </div>
                <div className="Actual__categories">
                    <h4 className="Categories__instock">Cars</h4>
                    <h4 className="Categories__instock">Mobails</h4>
                    <h4 className="Categories__instock">Phones</h4>
                    <h4 className="Categories__instock">Gaming</h4>
                </div>
            </div>
          
            
        </div>
    )
}

export default Banner
