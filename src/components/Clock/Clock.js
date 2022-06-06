import React, { useEffect, useRef } from 'react';
import Style from "../Clock/Clock.module.css";

const Clock = () => {

    const hr = useRef(null);
    const mn = useRef(null);
    const sc = useRef(null);

    useEffect(() => {
        
        setInterval(() => {

            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.current.style.transform = `rotateZ(${hh  + (mm/12)}deg)`;
            mn.current.style.transform = `rotateZ(${mm}deg)`;
            sc.current.style.transform = `rotateZ(${ss}deg)`;

        }, 1000)
        
    }, [])

    return(
        <>
            <div className={Style.main}>
                <div className={Style.box}>
                    <div className={Style.clock}>

                        <div ref={sc} style={{'--clr': '#04fc43'}} className={Style.circle}><i></i></div>
                        <div ref={mn} style={{'--clr': '#fee800'}}className={`${Style.circle} ${Style.circle2}`}><i></i></div>
                        <div ref={hr} style={{'--clr': '#ff2972'}} className={`${Style.circle} ${Style.circle3}`}><i></i></div>

                        <span style={{"--i" : 1}}> <b> 1 </b> </span>
                        <span style={{"--i" : 2}}> <b> 2 </b> </span>
                        <span style={{"--i" : 3}}> <b> 3 </b> </span>
                        <span style={{"--i" : 4}}> <b> 4 </b> </span>
                        <span style={{"--i" : 5}}> <b> 5 </b> </span>
                        <span style={{"--i" : 6}}> <b> 6 </b> </span>
                        <span style={{"--i" : 7}}> <b> 7 </b> </span>
                        <span style={{"--i" : 8}}> <b> 8 </b> </span>
                        <span style={{"--i" : 9}}> <b> 9 </b> </span>
                        <span style={{"--i" : 10}}> <b> 10 </b> </span>
                        <span style={{"--i" : 11}}> <b> 11</b> </span>
                        <span style={{"--i" : 12}}> <b> 12 </b> </span>
                        
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Clock;