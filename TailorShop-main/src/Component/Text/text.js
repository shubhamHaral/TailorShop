import React from 'react';
import './Text.css';
import { FaArrowRight } from "react-icons/fa";

const text = () => {
    return (
        <>
            <section >
                <div className='introContent'>
                    <span className='hello'>Make your</span>
                    <span className='introText'> dream clothes</span>
                    <span className='introName'> here</span>
                </div>
            </section>
            <div className='div'>
                <p>You can request your own model or</p>
                <p>the one I have provided</p>
                <p>
                    <button class="btn2">Get strted <FaArrowRight /></button>
                </p>

            </div>

        </>
    )
}

export default text;


