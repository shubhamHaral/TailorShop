import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer_text'>
                <div className='table'>
                    <div className="col-1">
                        <div className="tailer_text">TAILOR</div>
                        <div className="heading_text">a startup that has just started in the sewing field</div>
                    </div>
                    <div className="col-2">
                        <div className="heading_text">product</div>
                        <div className="sub_text">Batik Dress</div>
                        <div className="sub_text">Suit</div>
                        <div className="sub_text">Leather pants</div>
                        <div className="sub_text">koko shirt</div>

                    </div>
                    <div className="col-3">
                        <div className="heading_text">Help</div>
                        <div className="sub_text">Customer Service</div>
                        <div className="sub_text">Contact</div>


                    </div>
                    <div className="col-4">
                        <div className="heading_text">Social</div>
                        <div className="sub_text">Instagram</div>
                        <div className="sub_text">Twitter</div>
                        <div className="sub_text">Facebook</div>
                        <div className="sub_text">Tik Tok</div>

                    </div>
                    <div className="col-5">
                        <div className="heading_text">Legal</div>
                        <div className="sub_text">Privacy Policy</div>
                        <div className="sub_text">Term of use</div>
                        

                    </div>
                </div>
             
                <p className='copy'><hr /> Copyright © 2023 ArieAr All Rights Reserved </p>

            </div>
        </>
    )
}

export default Footer;