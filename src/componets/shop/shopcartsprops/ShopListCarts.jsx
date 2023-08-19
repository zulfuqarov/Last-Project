import React from "react";

const ShopListCarts = ({ BookImg, BookName, BookFilterPrice, AddToCartd }) => {
  return (
    <div className="Shop-list-carts-left-bottom col col-md col-lg-4">
      <div className="Shop-list-carts-left-bottom-img">
        <img src={BookImg} alt="" />
        <div className="position-absolute">
          <button onClick={AddToCartd}>ADD TO CART</button>
        </div>
      </div>
      <div className="text-center Shop-list-carts-left-bottom-about">
        <span>{BookName}</span>
        <p>${BookFilterPrice}</p>
      </div>
    </div>
  );
};

export default ShopListCarts;
