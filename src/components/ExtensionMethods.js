import React from 'react'
import './ExtensionMethods.css';
import HairMethodOne from './HairMethodOne';
import methodOne from '../assets/i-tip.jpg'
import methodTwo from '../assets/k-tip.jpg';
import methodThree from '../assets/hand-tied-weft.jpg';
import methodFour from '../assets/volume-weft.jpg';

const ExtensionMethods = () => {
  return (
    <div className='extension-method-container'>
        <h1>-Extension Methods-</h1>
      <div className='first-method'>
        <HairMethodOne image={methodOne}
          info='I-tips are a light weight method designed for fine to medium density hair. They have a 360 mobility. This is a great option for those who wear ponytails from time to time. These individual strands allow you to pick up to 6 different colors to create a seamless and dimensional blend. Maintenance is required every 4-6 weeks.'
          title='I-Tips'
        />
      </div>
      <div className='second-method'>
        <HairMethodOne image={methodTwo} 
        info='K-Tips are very similar to I-Tips. K-Tips are a light weight method designed for fine to medium density hair. They are installed using a heating tool to warm up the keratin to adhere to natural hair. The keratin is made with silicone that protects your natural hair, so there is no damage. K-Tips do not require in salon up keep. They can live in the hair for 3-6 months. After the duration of wear, it is time to remove them and get a new set of extenstions.'
        title='K-Tips'
        />
      </div>
      <div className='third-method'>
        <HairMethodOne image={methodThree}
        info='Hand-Tied Wefts are for ALL HAIR TYPES. They are customizable in color, placement, and density to look and feel natural. Hand-tied can give you instant length and volume in just 2-3 rows. Maintenance is required every 6-8 weeks.'
        title='Handtied Wefts'
        />
      </div>
      <div className='fourth-method'>
        <HairMethodOne image={methodFour}
        info='Volume wefts are great for guests with medium to thicker density hair. These wefts give you instant volume and length. Volume wefts are packaged for a full head installation. This is a great option for guest with a single all over color/blend. Maintenance is required every 6-8 weeks.'
        title='Volume Wefts'
        />
      </div>
    </div>
  )
}

export default ExtensionMethods