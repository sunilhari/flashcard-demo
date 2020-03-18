import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../Carousel";
function Cards() {
 let location = useLocation();
 const { id, name, cards } = location.state.user;
 console.log(cards);
 return (
  <>
   <h1> Welcome {name}</h1>
   <Carousel cards={cards} />
  </>
 );
}

export default Cards;
