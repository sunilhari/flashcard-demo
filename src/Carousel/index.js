import React, { useState } from "react";
import "./index.scss";
function Carousel(props) {
 const [activeIndex, setActiveIndex] = useState(0);

 function goToSlide(index) {
  setActiveIndex(index);
 }

 function goToPrevSlide(e) {
  e.preventDefault();
  let index = activeIndex;
  let { cards } = props;
  let cardsLength = cards.length;

  if (index < 1) {
   index = cardsLength;
  }

  --index;

  setActiveIndex(index);
 }

 function goToNextSlide(e) {
  e.preventDefault();

  let index = activeIndex;
  let { cards } = props;
  let cardsLength = cards.length;

  if (index === cardsLength) {
   index = -1;
  }

  ++index;

  setActiveIndex(index);
 }
 return (
  <div className="carousel">
   <CarouselLeftArrow onClick={e => goToPrevSlide(e)} />
   <ul className="carousel__slides">
    {props.cards.map((card, index) => (
     <CarouselSlide
      key={index}
      index={index}
      activeIndex={activeIndex}
      card={card}
     />
    ))}
   </ul>

   <CarouselRightArrow onClick={e => goToNextSlide(e)} />

   <ul className="carousel__indicators">
    {props.cards.map((card, index) => (
     <CarouselIndicator
      key={index}
      index={index}
      activeIndex={activeIndex}
      isActive={activeIndex == index}
      onClick={e => goToSlide(index)}
     />
    ))}
   </ul>
  </div>
 );
}
function CarouselSlide(props) {
 return (
  <li
   className={
    props.index === props.activeIndex
     ? "carousel__slide carousel__slide--active"
     : "carousel__slide"
   }>
   <p className="carousel-slide__content">{props.card.title}</p>
  </li>
 );
}
function CarouselIndicator(props) {
 return (
  <li>
   <a
    className={
     props.index == props.activeIndex
      ? "carousel__indicator carousel__indicator--active"
      : "carousel__indicator"
    }
    onClick={props.onClick}
   />
  </li>
 );
}

function CarouselLeftArrow(props) {
 return (
  <a
   href="#"
   className="carousel__arrow carousel__arrow--left"
   onClick={props.onClick}>
   <span>◀️</span>
  </a>
 );
}

function CarouselRightArrow(props) {
 return (
  <a
   href="#"
   className="carousel__arrow carousel__arrow--right"
   onClick={props.onClick}>
   <span>▶️</span>
  </a>
 );
}
export default Carousel;
