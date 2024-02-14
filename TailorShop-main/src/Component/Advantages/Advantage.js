import React from 'react';
import './Advantage.css';
import Shape1 from '../../Assets/Group 3 (1).png';
import Shape2 from '../../Assets/Group 2.png';
import shape5 from '../../Assets/Group 4.png';

const Advantage = () => {
  return (
    <>

      <div className="advantages">
        <div className='title'>
          <p>Our advantage</p>
          <span>We have several advantages that</span>
          <span>other tailors don't have</span>
        </div>
        <div className='Group'>
          <div className='shape1'>
            <img src={Shape1} alt="" />
            <p id='profe'>Professional tailor</p>
            <p id='exp'>Our tailors have more than 20 years of experience</p>
          </div>


          <div className='shape3'>
            <img src={shape5} alt="" />
            <p id='best'>best ingredients</p>
            <p id='material'>The materials we use are imported directly from Japan</p>

          </div>
          <div className='shape2'>
            <img src={Shape2} alt="" />
            <p id='morden'>Modern Models</p>
            <p id='model'>Our model designs keep up with the times</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Advantage;