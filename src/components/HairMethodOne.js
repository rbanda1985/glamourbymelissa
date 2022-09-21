import React from 'react'
import '../components/HairMethodOne.css'
import { MDBBtn } from 'mdb-react-ui-kit'

const HairMethodOne = ({image, info, title}) => {
  return (
    <div className='method-one-container'>
      <div className='image-method-container'>
      <img src={image} />
      </div>
      <div className='method-one-info-container'>
        <h2>{title}</h2>
        <p>{info}</p>
        <div className='booking-button'>
        <MDBBtn href='/extension-form' style={{backgroundColor: 'pink', color: 'black'}}>Book Now</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default HairMethodOne;