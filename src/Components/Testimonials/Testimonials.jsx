import React, { useState } from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';

const Testimonials = () => {

    const transition = {
        type: 'spring',
        duration: 3
    }
    const [selected, setSelected] = useState(0);
    const testLength = testimonialsData.length;

    return (
        <div className="Testimonials">
            <div className="test-left">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about Us</span>
                <motion.span
                    key={selected}
                    transition={transition}
                    initial={{opacity: 0 , x: -100}}
                    animate={{opacity: 1 , x: 0}}
                    exit={{opacity: 0, x: 100}}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{color: 'var(--orange)'}}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="test-right">
                <motion.div
                    transition={{...transition, duration: 2}}
                    initial={{opacity: 0 , x: -100}}
                    whileInView={{opacity: 1 , x: 0}}
                ></motion.div>
                <motion.div
                    transition={{...transition, duration: 2}}
                    initial={{opacity: 0 , x: 100}}
                    whileInView={{opacity: 1 , x: 0}}
                ></motion.div>
                <motion.img src={testimonialsData[selected].image} alt="img" key={selected}
                    transition={transition}
                    initial={{opacity: 0 , x: 100}}
                    animate={{opacity: 1 , x: 0}}
                    exit={{opacity: 0, x: -100}}
                />
                <div className='arrows'>
                    <img    src={leftArrow} alt='leftArrow' 
                            onClick={() =>
                                selected === 0 ? setSelected(testLength - 1) : setSelected((prev) => prev - 1) 
                            } />
                    <img src={rightArrow} alt='rightArrow' 
                            onClick={() =>
                                selected === testLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) 
                            } /> 
                </div>
            </div>
        </div>
    )
}

export default Testimonials