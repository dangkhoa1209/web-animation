
import Styles from './Home.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlinePhone, AiOutlineMail , AiOutlineHtml5, AiOutlineSync, AiFillGithub } from 'react-icons/ai';
import {DiJavascript1, DiReact, DiNodejsSmall, DiResponsive, DiMysql, DiMongodb} from 'react-icons/di'
import {FaCss3, FaPhp, FaLaravel} from 'react-icons/fa';
import 'tippy.js/dist/tippy.css';

import AVT from "../../images/huynhdangkhoa.jpg";

import Interactive from '../../components/Interactive/Interactive';
import BackgroundParticles from '../../components/BackgroundParticles/BackgroundParticles';
import Masonry from "react-masonry-css";

import Menu3D from '../../components/Menu3D/Menu3D';
import MenuRound from '../../components/MenuRound/MenuRound';
import Portfolio from '../../components/Portfolio/Portfolio';
import TodoApp from '../../components/TodoApp/TodoApp';
import LoadPage from '../../components/LoadPage/LoadPage';
import LoadPageShow from '../../components/LoadPage/LoadPageShow';
import Milk from "../../components/Milk/Milk";
import Clock from '../../components/Clock/Clock';


const breakpointColumnsObj = {
    default: 4,
    1501: 3,
    1201: 2,
    961: 1,
    721: 1,
    1: 1
};



const Home = () => {
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false)
        },1000)

        
    }, []);

    const handleCall = (phone) => {
        document.location.href = `tel:${phone}`;
        return;
    }

    const handleSendMail = (email) => {
        document.location.href = `mailto:${email}`;
        return;
    }

    return ( 
        <>
            {/* <BackgroundParticles></BackgroundParticles> */}

            {pageLoading && <LoadPage></LoadPage>}

            <div className={Styles.main}>
                <div className={Styles.info}>
                    <div className={Styles.box_info} >
                        <div className={Styles.avt}>
                            <img className={Styles.image_avt} src={AVT}></img>   
                           
                        </div>
                        <div className={Styles.text_info}>
                            <h4>Huỳnh Đăng Khoa</h4>
                            <p>Halcyon marks a golden age for grid themes. It's as tranquil as it is polished, gorgeously flat and incredibly color-customizable. An evolution of the iconic masonry theme that adds as much as it refines, Halcyon is a boldly confident grid theme designed to handle anything and improve just about everything. You can purchase it in the Tumblr theme store for</p>
                        </div>
                        <div className={Styles.contact_info}>
                            <div className={Styles.contact_item}  onClick={() => handleCall('+84 333 466 444')}>
                                <div className={Styles.box_icon}>
                                    <AiOutlinePhone className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_text_info}>
                                    <p>+84 333 466 444</p>
                                </div>
                            </div>
                            <div className={Styles.contact_item} onClick={() => handleSendMail('hdkhoa.work@gmail.com')}>
                                <div className={Styles.box_icon}>
                                    <AiOutlineMail className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_text_info}>
                                    <p>hdkhoa.work@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.skills}>
                            <h4>Kỹ năng</h4>
                            <div className={Styles.skills_icon}>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>HTML</span>
                                    <AiOutlineHtml5 className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>CSS</span>
                                    <FaCss3 className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Javascript</span>
                                    <DiJavascript1 className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>ReactJS</span>
                                    <DiReact className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Responsive</span>
                                    <DiResponsive className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>PHP</span>
                                    <FaPhp className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Laravel</span>
                                    <FaLaravel className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>NodeJS</span>
                                    <DiNodejsSmall className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Realtime</span>
                                    <AiOutlineSync className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>MySQL</span>
                                    <DiMysql className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Mongodb</span>
                                    <DiMongodb className={Styles.icon}/>
                                </div>
                                

                                {/* <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Tooltip</span>
                                    <AiOutlineHtml5 className={Styles.icon}/>
                                </div>

                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Tooltip</span>
                                    <AiOutlineHtml5 className={Styles.icon}/>
                                </div>
                                <div className={Styles.box_icon}>
                                    <span className={Styles.tooltip}>Tooltip</span>
                                    <AiOutlineHtml5 className={Styles.icon}/>
                                </div> */}

                               
                                {/* <FaCss3 className={Styles.icon}/>
                                <DiJavascript1 className={Styles.icon}/>
                                <DiReact className={Styles.icon}/>
                                <FaPhp className={Styles.icon}/>
                                <FaLaravel className={Styles.icon}/>
                                <DiNodejsSmall className={Styles.icon}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.product}>
                    <div className={Styles.grid}>
                        {/* CSS custom viết trong index.css của index.html */}
                        {/* <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my_masonry_grid_column"
                            options
                        > */}

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <Portfolio/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1654213479622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <Clock/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1654213479622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <Menu3D/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1653923079622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <MenuRound/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1654213179622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <TodoApp/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1653213479622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <LoadPageShow/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1654013479622}/>
                                </div>
                            </div>

                            <div className={Styles.grid_item}>
                                <div className={Styles.item}>
                                    <Milk/>
                                </div>
                                <div className={Styles.interactive}>
                                    <Interactive time={1654013479622}/>
                                </div>
                            </div>

                            

                        {/* </Masonry> */}

                    </div>   
                </div>
            </div>
        </>
    )
}

export default Home;