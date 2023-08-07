import React from 'react'

const CardsProps = ({popularimg}) => {
  return (
    <div className="  col-12 col-md-6 col-lg-3">
      <div className="Popular-img">
        <div className='Popular-icons'>
        <i className="fa-regular fa-heart"></i>
        </div>
        <img src={popularimg} alt="" />
      </div>
      <div className='Popular-about pt-4'>
        <div className='d-flex justify-content-around jus about-top'>
          <h1>Photograpy</h1>
          <span>120</span>
        </div>
        <div className='about-bottom'>
        <a href="">Amy Drufesne</a>
        </div>
      </div>
    </div>
  )
}

export default CardsProps