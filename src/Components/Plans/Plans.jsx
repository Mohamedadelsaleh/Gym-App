import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className="plans-container"> 
            <div className="plans-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plan, idx)=>
                        (
                            <div className="plan" key={idx}>
                                {plan.icon}
                                <span>{plan.name}</span>
                                <span>$ {plan.price}</span>
                                <div className="features">
                                    {plan.features.map((feature, idx)=>
                                        (
                                            <div className='feature' key={idx}>
                                                <img src={whiteTick} alt='whiteTick' />
                                                <span>{feature}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div>
                                    <span>See more benefits -&gt; </span>
                                </div>
                                <button className='btn'>Join Now</button>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Plans