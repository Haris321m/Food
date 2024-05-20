import React from 'react';
import Content from './list.js';
import Cards from './cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#9ac300",
          width: "18px", // Adjust width as needed
          height: "18px", // Adjust height as needed
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          right: "-25px", // Adjust right position for the arrow
          transform: "translateY(-50%)", // Center vertically
          zIndex: "1", // Ensure it's above the slider content
          cursor: "pointer", // Show pointer cursor on hover
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#9ac300",
          width: "18px", // Increase width
          height: "18px", // Increase height
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "-20px", // Adjust left position for the arrow
          right: "-30px", // Adjust right position for the arrow
          transform: "translateY(-50%)", // Center vertically
          cursor: "pointer", // Show pointer cursor on hover
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={onClick}
      />
    );
  }

function content(status) {
    return (
        <Cards
            img={status.img}
            title={status.title}
        />
    );
}

function ExploreMenu() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    return (
        <>
            <div className='text-center'>
                <h1 className='pb-3 border-b-8 border-green-900 inline-block text-5xl font-bold mt-20 font-[roboto]'>Explore Menu</h1>
                <Slider {...settings} className='w-[80%] m-auto gap-4 mt-20'>
                    {Content.map(content)}
                </Slider>
            </div>
        </>
    );
}

export default ExploreMenu;
