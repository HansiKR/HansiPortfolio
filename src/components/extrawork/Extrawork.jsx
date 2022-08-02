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
      "To guide others and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor ut sed fugiat consequatur ab dolorem vitae repellendus quas nulla, possimus explicabo provident accusantium assumenda veniam et labore dicta exercitationem.",
  },
  {
    image: Speaker,
    title: "Sharing Knowledge",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor ut sed fugiat consequatur ab dolorem vitae repellendus quas nulla, possimus explicabo provident accusantium assumenda veniam et labore dicta exercitationem.",
  },
  {
    image: Moderator,
    title: "Managing People",
    description:
      "To guide others and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor ut sed fugiat consequatur ab dolorem vitae repellendus quas nulla, possimus explicabo provident accusantium assumenda veniam et labore dicta exercitationem.",
  },
  {
    image: Achiever,
    title: "Reaching Heights",
    description:
      "To guide others and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolor ut sed fugiat consequatur ab dolorem vitae repellendus quas nulla, possimus explicabo provident accusantium assumenda veniam et labore dicta exercitationem.",
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
