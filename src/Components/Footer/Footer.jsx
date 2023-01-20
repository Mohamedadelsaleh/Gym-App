import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import youtube from '../../assets/Youtube.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href='https://www.linkedin.com/in/mohamed-adel-saleh/' target="_blank" rel="noreferrer"> <img src={linkedin} alt='linkedin' /> </a>
                    <a href='https://www.facebook.com/mohamed.adel.saleh77/' target="_blank" rel="noreferrer"> <img src={facebook} alt='facebook' /> </a>
                    <a href='https://github.com/Mohamedadelsaleh' target="_blank" rel="noreferrer"> <img src={github} alt='github' /> </a>
                    <a href='https://www.youtube.com/channel/UCLo6Qu8y5NcHVl4xJ_4U9MA' target="_blank" rel="noreferrer"> <img src={youtube} alt='youtube' /> </a>
                </div>
                <div className="footer-logo">
                    <img src={Logo} alt='logo' />
                </div>
            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer