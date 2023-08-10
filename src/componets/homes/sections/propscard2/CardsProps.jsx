import React from 'react'

const CardsProps = ({popularimg,popularabout,popularlinks,popularprice}) => {
  return (
    <div className=" Popular-cardt col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="Popular-img">
        <div className='Popular-icons'>
        <i className="fa-regular fa-heart"></i>
        </div>
        <img src={popularimg} alt="" />
      </div>
      <div className='Popular-about pt-4'>
        <div className='d-flex   about-top'>
          <h1>{popularabout}</h1>
          <span>{popularprice}</span>
        </div>
        <div className='d-flex justify-content-left  about-bottom'>
        <a href="">{popularlinks}</a>
        </div>
        <span>Blandit accumsan ei vis, <br />  maiorum epicurel at mei <br /> nibh viderer</span>
        <div className='about-bottom-last '>
          <span><i  class="fa-solid fa-user-group"></i>1</span>
          <span><i class="fa-regular fa-clock"></i>2 hours</span>
        </div>
      </div>
    </div>
  )
}

export default CardsProps