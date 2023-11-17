import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "www.linkedin.com/in/kenai-epps",
  },
  { iconName: "fa fa-github", link: "https://github.com/iamMysticK23" },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/hmkexpeditions",
  },
  { iconName: "fa fa-youtube", link: "https://www.youtube.com/channel/UC5xF6HWcdTo6sc2Z8WVCrvw" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
