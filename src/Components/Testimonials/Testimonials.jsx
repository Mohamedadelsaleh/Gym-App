import React, { useState } from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const testLength = testimonialsData.length;

    return (
        <div className="Testimonials">
            <div className="test-left">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about Us</span>
                <span>{testimonialsData[selected].review}</span>
                <span>
                    <span style={{color: 'var(--orange)'}}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="test-right">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="img" />
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