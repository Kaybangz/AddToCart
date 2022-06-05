import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs"

const ImageSlider = () => {
  const sliderProperties = {
    indicators: true,
    prevArrow: <div style={{width: "39px", marginRight: "-40px", fontSize: "4rem", color: "white", cursor: "pointer"}}><BsArrowLeftCircle/></div>,
    nextArrow: <div style={{width: "39px", marginLeft: "-40px", fontSize: "4rem", color: "white", cursor: "pointer"}}><BsArrowRightCircle/></div>,
  };

  return (
    <div className="slider_container">
      <Slide easing="ease" {...sliderProperties}>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,21,199,0.3337710084033614) 0%, rgba(51,238,2,0.4682247899159664) 100%, rgba(0,223,198,0.7455357142857143) 100%), url(${"https://media.istockphoto.com/photos/cheerful-young-man-wearing-lilac-hoodie-picture-id1327784914?b=1&k=20&m=1327784914&s=170667a&w=0&h=PmUYTZRAiGr3GSSttVhxl2K_Pgfw8qu28X1W_MijjWc="})`,
            }}
          >
            <span>Stylish</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,21,199,0.3337710084033614) 0%, rgba(176,2,238,0.5102415966386555) 100%, rgba(0,223,198,0.7455357142857143) 100%), url(${"https://media.istockphoto.com/photos/sweet-smiling-female-posing-in-studio-picture-id1157382656?b=1&k=20&m=1157382656&s=170667a&w=0&h=98BuK8UK2600soZSWFrv40l_XkePpssmbpmrh6IJ39I="})`,
            }}
          >
            <span>Affordable</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,21,199,0.3337710084033614) 0%, rgba(2,43,238,0.5466561624649859) 100%, rgba(0,223,198,0.7455357142857143) 100%), url(${"https://media.istockphoto.com/photos/successful-excited-young-african-man-shows-ok-sign-picture-id1069245670?k=20&m=1069245670&s=612x612&w=0&h=AQLHtgidsEYxnOiJytv45GPZxClUSSi8C6DXTaEmS5E="})`,
            }}
          >
            <span>Classy</span>
          </div>
        </div>

        <div className="each-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,21,199,0.3337710084033614) 0%, rgba(2,238,216,0.5158438375350141) 100%, rgba(0,223,198,0.7455357142857143) 100%), url(${"https://media.istockphoto.com/photos/portrait-of-a-young-pretty-female-student-in-a-white-hoodie-casual-picture-id1248498822?b=1&k=20&m=1248498822&s=170667a&w=0&h=uG2LCA-ZMzAK1SwrxHLmYVr06BYQPbaLD7KRZLkaBSg="})`,
            }}
          >
            <span>Trendy</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ImageSlider;
