import React from "react";
import "./extrawork.css";
import EB from "../../assets/img/EBMember.svg";
import Speaker from "../../assets/img/Speaker.svg";
import Moderator from "../../assets/img/Moderator.svg";
import Achiever from "../../assets/img/Achiever.svg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Data Array for the Swiper
const data = [
  {
    image: EB,
    title: "Faculty Alumnus Contributor",
    description:
      "Share an industry perspective in curriculum revision discussions at the Faculty of Computing and Technology, University of Kelaniya. I have also served as an industry panelist at first-year orientation and interviewed intern candidates at the faculty career fair.",
  },
  {
    image: EB,
    title: "Taking Leadership",
    description:
      "I have held leadership roles as Secretary of ITSA UOK, Co-Editor of the UOK ISACA Student Group, and Secretary of LED KLN. These roles gave me opportunities to support others, encourage new leaders, and contribute to my student communities.",
  },
  {
    image: Speaker,
    title: "Sharing Knowledge",
    description:
      "As a guest speaker, I share my experience and knowledge with others. Speaking has helped me grow, and I hope to continue learning while supporting other people’s development.",
  },
  {
    image: Moderator,
    title: "Managing People",
    description:
      "I have facilitated and moderated more than 20 events, including discussions, webinars, orientations, and competitions. I enjoy helping events run smoothly and creating an engaging experience for participants.",
  },
  {
    image: Achiever,
    title: "Reaching Heights",
    description:
      "I enjoy stepping outside my comfort zone through hackathons, ideathons, and other competitions. These experiences have taught me to approach both wins and setbacks with resilience and a positive attitude.",
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
