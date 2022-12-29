import React from 'react'
import  './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return(
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo"/>
                    <p>WillowHood K12 182 DK Alkins, All Rights reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Cresent 14 k12 Alkins</p>
                    <p>0812-222123</p>
                    <p>emma@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@ 2022 GPT-3. All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;