import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "software engineering", subTitle2: "bootcamps completed" },
  { title: "60", subTitle1: "gitHub", subTitle2: "repositories" },
  { title: "5", subTitle1: "programming", subTitle2: "languages studied" },
  { title: "4", subTitle1: "frameworks", subTitle2: "studied" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
