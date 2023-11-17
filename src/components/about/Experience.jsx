import React from "react";

const experienceContent = [
  {
    year: "   October 2023 - Present",
    position: "Front End Developer",
    compnayName: "Freelance Projects",
    details: ` Completing various front end projects to continue to build my portfolio and gain experience. `,
  },

  {
    year: "July 2023 - October 2023",
    position: "Software Engineer in Training",
    compnayName: "Coding Temple",
    details: `
    As a software engineer trainee, I acquired comprehensive knowledge and practical experience in web development, 
    including HTML, CSS, and JavaScript for front-end design. 
    I developed proficiency in Python and Flask for back-end development, 
    and honed skills in managing SQL databases. Additionally, I gained expertise in advanced front-end technologies like TypeScript and React.`,
  },

  {
    year: "2020  - Present",
    position: "Photographer/Videographer",
    compnayName: "HighwayMysticK Expeditions",
    details: ` I create YouTube videos and instagram posts to promote my photography and videography. I utilize
                Final Cut Pro for video editing, Adobe Lightroom and Photoshop for photo editing and graphic design `,
  },


];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
