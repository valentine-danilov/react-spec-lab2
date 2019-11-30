import React from 'react';

const CarouselSlide = (props) => (
    <div className={"carousel-item " + (props.isActive ? "active" : "")}>
        <img className="slide-img" src="http://wallpoper.com/images/00/31/33/51/black-background_00313351.jpg" alt="Carousel slide" />
        <div className="carousel-caption">
            <h1>TO BE IMPLEMENTED!</h1>
        </div>
    </div>
);

export default CarouselSlide;