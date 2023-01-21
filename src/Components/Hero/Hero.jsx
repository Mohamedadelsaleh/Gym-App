import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import Hero_img from '../../assets/hero_image.png';
import Hero_img_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {

    const transition = {
        type: 'spring',
        duration: 3
    }

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />
                <div className="the-best-ad">
                    <motion.div 
                        initial={{ left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type:'tween'}}>
                    </motion.div>
                    <span>The best Fitness Club in the Town</span>
                </div>
                <div className="hero-text">
                    <div >
                        <span className="stroke-text">SHAP </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest.
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Member Joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-hero">
                <button className="btn">Join Now</button>
                <motion.div className="heart-rate"
                            transition={transition}
                            initial={{right:"-1rem"}}
                            whileInView={{right:"4rem"}}>
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span><span> 116 bpm</span>
                </motion.div>
                <img className="hero-image" src={Hero_img} alt="hero_img" />
                <motion.img className="hero-image-back" src={Hero_img_back} alt="hero_img_back" 
                            transition={transition}
                            initial={{right:"11rem"}}
                            whileInView={{right:"20rem"}}/>
                <motion.div className="calories"
                            transition={transition}
                            initial={{right:"40rem"}}
                            whileInView={{right:"28rem"}}>
                    <img src={Calories} alt="calories"/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero