import React from "react";
import Style from "./Milk.module.css";

const Milk = () => {
    return (
        <>
            <div className={Style.main}>
                <div className={Style.box}>
                    {/* <h4>Milk</h4> */}
                    <div className={Style.loader}>
                        <span style={{'--i':0}}></span>
                        <span style={{'--i':1}}></span>
                        <span style={{'--i':2}}></span>
                        <span style={{'--i':3}}></span>
                        <span style={{'--i':4}}></span>
                        <span style={{'--i':5}}></span>
                        <span style={{'--i':6}}></span>
                        <span style={{'--i':7}}></span>
                    </div>
                </div>
            </div>
            {/* <svg className={Style.svg}>
                <filter id="Gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                    <feColorMatrix Values="
                        // 1 0 0 0 0
                        // 0 1 0 0 0
                        // 0 0 1 0 0
                        // 0 0 0 10 -5
                    "/>
                   
                </filter>
            </svg> */}
        </>
    )
}

export default Milk;