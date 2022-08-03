import React from "react";
import "./extrawork.css";
import EB from "../../assets/img/EBMember.svg";
import Speaker from "../../assets/img/Speaker.svg";
import Moderator from "../../assets/img/Moderator.svg";
import Achiever from "../../assets/img/Achiever.svg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Data Array for the Swiper
const data = [
  {
    image: EB,
    title: "Taking Leadership",
    description:
      "To guide others and create more leaders instead of followers. I strongly believe that as the Secretary of ITSA UOK, Co-Editor of UOK ISACA Student Group as well as the Secretary of LED KLN I was and am able to make a positive impact on those who look up to me.",
  },
  {
    image: Speaker,
    title: "Sharing Knowledge",
    description:
      "To share what I know and help others be better version of themselves. My journey as a guest speaker is fairly new and have been a great exposure to me. I expect to continue this journey and improve myself while also helping others improve themselves.",
  },
  {
    image: Moderator,
    title: "Managing People",
    description:
      "To facilitate and guide various types of events including discussons, webinars, orientations, competitions, etc. Over the past couple of year I have played my part as a moderator in 20+ event. This is most definitely an area that I enjoy out of my regular work.",
  },
  {
    image: Achiever,
    title: "Reaching Heights",
    description:
      "To challenge myself and stand out amidst a crowd. I do not hesitate to step out of my comfort zone and expose myself to a different aspect life. Parcticipating in competitions such as hackathons and ideathons have always taught me to face both victories and loses with a smile.",
  },
];

const Extrawork = () => {
  return (
    <section id="extra-work">
      <h5>What else do I do? </h5>
      <h2>My Extra Curriculars</h2>
      <Swiper
        className="container container__extrawork"
        // install Swiper modules
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {/* Mapping through the JS array */}
        {data.map(({ image, title, description }, index) => {
          return (
            <SwiperSlide className="extrawork">
              <div className="extrawork__flyer">
                <img src={image} alt="" />
              </div>
              <div className="work__text">
                <h5 className="extrawork__title">{title}</h5>
                <small className="description">{description}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Extrawork;
