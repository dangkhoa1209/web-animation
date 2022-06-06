import React from "react";
import Style from "./LoadPage.module.css";

const LoadPageShow = () => {
    return (
        <>
            <div className={Style.mainshow}>
                <div className={Style.box}>
                    <div className={Style.ring}></div>
                    <div className={Style.ring}></div>
                    <div className={Style.ring}></div>
                </div>
            </div>
        </>
    )
}

export default LoadPageShow;

