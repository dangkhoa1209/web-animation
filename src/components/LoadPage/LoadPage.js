import React from "react";
import Style from "./LoadPage.module.css";

const LoadPage = () => {
    return (
        <>
            <div className={Style.main}>
                <div className={Style.box}>
                    <div className={Style.ring}></div>
                    <div className={Style.ring}></div>
                    <div className={Style.ring}></div>
                </div>
            </div>
        </>
    )
}

export default LoadPage;

