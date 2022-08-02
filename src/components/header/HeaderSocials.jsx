import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hansi-radhakrishnan/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/HansiKR" target="_blank">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a href="https://medium.com/@hansiradhakrishnan" target="_blank">
        <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default HeaderSocials;
