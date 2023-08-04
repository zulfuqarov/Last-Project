import React from "react";
import "./SectionsNewst.css";
import Propscard from "./propscard/Propscard"
// impor img start
import Newestimg1 from './img/event-7.jpg'
import Newestimg2 from './img/event-8.jpg'
import Newestimg3 from './img/event-9.jpg'
// impor img end
const SectionsNewest = () => {
  return (
    <section className="Sections-Newst container ">
      <div className="text-center Sections-Newst-Events">
        <h1>Newest Events</h1>
        <span>
          Etiam porttitor risus massa nec condiment gravida nibh vel velit
          auctor aliquetnean <br /> sollicitudin, lorem quis bibendum auci elit
          consequat
        </span>
      </div>
      <div className="row">
        <Propscard Newestimg={Newestimg1} newesth1="Graduation" newestspan1="November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm" newestspan2='24 Wiley Ave, East York'/>
        <Propscard Newestimg={Newestimg2} newesth1="Let’s Talk Science" newestspan1="October 10, 2024 @ 9:00 am - October 10, 2029 @ 9:00 am" newestspan2='24 Wiley Ave, East York'/>
        <Propscard Newestimg={Newestimg3} newesth1="Painting Festival" newestspan1="October 10, 2024 @ 10:00 am - October 10, 2029 @ 6:00 pm" newestspan2='354 Shuter St Toronto'/>
      </div>
    </section>
  );
};

export default SectionsNewest;
