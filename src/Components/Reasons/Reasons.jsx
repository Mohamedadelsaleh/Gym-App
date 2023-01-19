import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-reasons">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image1" />
                <img src={image3} alt="image1" />
                <img src={image4} alt="image1" />
            </div>
            <div className="right-reasons">
                <span>Some reasons</span>
                <div>
                    <span className="stroke-text">Why</span>
                    <span> choose Us ?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt='tick' />
                        <span>OVER +140 EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt='tick' />
                        <span>TRAIN SMARTER AND FAST THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt='tick' />
                        <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                    </div>
                    <div>
                        <img src={tick} alt='tick' />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR PARTNERS</span>
                <div className='partners'>
                    <img src={adidas} alt='adidas' />
                    <img src={nb} alt='nb' />
                    <img src={nike} alt='nike' />
                </div>
            </div>
        </div>
    )
}

export default Reasons