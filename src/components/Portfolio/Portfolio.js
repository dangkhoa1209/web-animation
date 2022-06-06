import React from 'react';
import Style from './Portfolio.module.css'

const Portfolio = () => {
    return(
        <>
            <div className={Style.main}>
                <div className={Style.box}>
                    <p className={Style.text}>Portfolios</p>
                </div>
            </div>
        </>
    )
}

export default Portfolio;