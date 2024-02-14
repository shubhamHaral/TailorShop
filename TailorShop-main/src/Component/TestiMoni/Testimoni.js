import React from 'react';
import './Testimoni.css';
import Group7 from '../../Assets/Group 7.png';
import Group6 from '../../Assets/Group 6.png'
import Group5 from '../../Assets/Group 5.png'
import logs1 from '../../Assets/Ellipse 4.png'
const Testimoni = () => {
  return (
    <>
      <div className="testimoni">
        <div className='Group7'>
          <img src={Group7} alt="" />
        </div>
        <div className='Group6'>
          <img src={Group6} alt="" />
        </div>
        <div className="contents">
          <p id='HeSay'>what did he say</p>
          <p id='reply'>Pelayanan nya bagus sekali, jahitannya</p>
          <p id='reply' > juga rapi, suka deh</p>
          <p className='for_rating'>
            <div className='logos'><img src={logs1} alt="" /></div>
            <div >
              <div className='for_text1'>
                Farhan Ganteng
              </div>
               <div className='for_text2'>
               Lelaki lajang
              </div>
            </div>
          </p>
          <p>
            <img src={Group5} alt="" />
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>

  )
}

export default Testimoni;
