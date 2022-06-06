import React, {useState} from "react";
import Style from "./MenuRound.module.css";
import { FaRegBell, FaRegHeart, FaRegEdit, FaWifi, FaRegAddressCard
    , FaRegMap ,FaRegPaperPlane, FaRegComment} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai"
 
const MenuRound = () => {

    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <>
            <div className={Style.main}>
                <div className={Style.box}>
                    <div 

                        className = {
                            activeMenu ? 
                                `${Style.circle} ${Style.active}`
                            : 
                                `${Style.circle} ${Style.unactive}`
                        }
                        
                    
                    
                    >
                        <div className={Style.item} style={{'--i':2}}>
                            <span>
                                <FaRegBell className={Style.icon}></FaRegBell>
                            </span>
                            <span>
                                <FaRegHeart className={Style.icon}></FaRegHeart>
                            </span>
                            <span>
                                <FaRegEdit className={Style.icon}></FaRegEdit>
                            </span>
                            <span>
                                <FaWifi className={Style.icon}></FaWifi>
                            </span>
                        </div>
                        <div className={Style.item} style={{'--i':3}}>
                            <span>
                                <FaRegAddressCard className={Style.icon}></FaRegAddressCard>
                            </span>
                            <span>
                                <FaRegMap className={Style.icon}></FaRegMap>
                            </span>
                            <span>
                                <FaRegPaperPlane className={Style.icon}></FaRegPaperPlane>
                            </span>
                            <span>
                                <FaRegComment className={Style.icon}></FaRegComment>
                            </span>
                        </div>
                    </div>
                    <div className={Style.menu} onClick={() => {setActiveMenu(prev => !prev)}}>
                        <AiOutlineMenu className={Style.icon_menu}></AiOutlineMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuRound;