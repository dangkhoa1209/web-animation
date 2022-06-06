import React, {useState} from 'react';

import Style from './Interactive.module.css';
import {BiTimeFive} from 'react-icons/bi';
import {HiHeart} from 'react-icons/hi';
import mapTime from '../../modules/mapTime';


const Interactive = (time) => {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        console.log("sfdfsdf sdf ");
        setLike(prev => prev + 1);
    }

    return (
        <>
            <div className={Style.box}>
                <div className={Style.item}>
                    <div className={Style.box_icon}>
                        <BiTimeFive className={Style.icon}/>
                    </div>
                    <div className={Style.value}>
                        <p>{mapTime(time.time)}</p>
                    </div>
                </div>
                <div className={Style.item} onClick={() => handleLike()}>
                    <div className={Style.box_icon}>
                        <HiHeart className={Style.icon}/>
                    </div>
                    <div className={Style.value}>
                        <p>{like}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interactive;