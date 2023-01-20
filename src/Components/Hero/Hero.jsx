import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import Hero_img from '../../assets/hero_image.png';
import Hero_img_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';


const Hero = () => {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />
                <div className="the-best-ad">
                    <div></div>
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
                <div className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span><span> 116 bpm</span>
                </div>
                <img className="hero-image" src={Hero_img} alt="hero_img" />
                <img className="hero-image-back" src={Hero_img_back} alt="hero_img_back" />
                <div className="calories">
                    <img src={Calories} alt="calories"/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero