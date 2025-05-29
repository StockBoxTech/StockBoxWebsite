import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import SideAnimateCard from "./SideAnimateCard";
import { axiosInstance } from "../../../dashboard/src/service/axiosInterceptor";

const Card = () => {
  const cardRefs = useRef([]);
  const [activeImages, setActiveImages] = useState([]);

  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axiosInstance.get(
          `/api/crousal/smallScreen/get-active-image`
        );
         const activeImageData = res?.data?.data;

    // Convert the object into an array of images
    const imageArray = [activeImageData.img1, activeImageData.img2, activeImageData.img3, activeImageData.img4];
    setActiveImages(imageArray);
      } catch (err) {
        console.error("Error fetching images", err);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    console.log("Active images fetched:", activeImages);
  }, [activeImages]);

  // GSAP animation for mobile view
  useGSAP(() => {
  let index = 0;

  const rotateCards = () => {
    cardRefs.current.forEach((card, i) => {
      const position = (i + index) % cardRefs.current.length;

      gsap.to(card, {
        duration: 1,
        zIndex: cardRefs.current.length - position,
        width: `${290 + position * 10}px`,
        height: "370px",
        scale: 1 - position * 0.05,
        x: position * 10,
        y: position * 20,
        opacity: 1 - position * 0.3,
      });
    });

    index = (index + 1) % cardRefs.current.length;
  };

  const interval = setInterval(rotateCards, 2000);
  return () => clearInterval(interval);
}, [activeImages]);


  return (
    <div className="">
      {/* Desktop */}
      <SideAnimateCard className="w-screen bg-amber-100" />

      {/* Mobile */}
      <div className="flex justify-center items-center h-[70vh] md:hidden">
        <div className="relative flex justify-center w-1/2 items-center">
          {activeImages.slice(0, 4).map((imgObj, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute flex justify-center items-center"
              style={{
                width: "220px",
                height: "200px",
                borderRadius: "20px",
                boxShadow: "0px 24px 10px rgba(255, 255, 255, 0.04)",
              }}
            >
              <img
                src={imgObj.secure_url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
