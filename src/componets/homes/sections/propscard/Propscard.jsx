import React from "react";

const propscard = ({ newesth1, newestspan1, newestspan2,Newestimg }) => {
  return (
    <div className="Newst-Events-card  col-12 col-md-4">
      <div className="Newst-Events-card-img">
        <div>
          <span className="newest-date">
            22 <br />
            now
          </span>
        </div>
        <img src={Newestimg} alt="" />
      </div>
      <h1>{newesth1}</h1>
      <span>
        {" "}
        <i class="fa-regular fa-clock"></i> {newestspan1}
      </span>{" "}
      <br />
      <span>
        {" "}
        <i class="fa-solid fa-location-dot"></i> {newestspan2}
      </span>
    </div>
  );
};

export default propscard;
