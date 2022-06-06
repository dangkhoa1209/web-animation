import React from 'react';
import Styles from './Menu3D.module.css';

const Menu3D = () => {
    return (
        <>
            <div className={`${Styles.main} main`}>
                <div className={Styles.box}>
                    <ul className={Styles.ul}>
                        <li style={{'--i':6}} className={Styles.li}><p className={Styles.p}>Home</p></li>
                        <li style={{'--i':5}} className={Styles.li}><p className={Styles.p}>About</p></li>
                        <li style={{'--i':4}} className={Styles.li}><p className={Styles.p}>Services</p></li>
                        <li style={{'--i':3}} className={Styles.li}><p className={Styles.p}>Portfolio</p></li>
                        <li style={{'--i':2}} className={Styles.li}><p className={Styles.p}>Our Team</p></li>
                        <li style={{'--i':1}} className={Styles.li}><p className={Styles.p}>Contact</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu3D;

