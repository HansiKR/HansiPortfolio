import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hansi-radhakrishnan/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/HansiKR" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/itzmehansi_/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default HeaderSocials;
