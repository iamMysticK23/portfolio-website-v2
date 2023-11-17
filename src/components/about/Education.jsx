import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "FRONT END DEVELOPER CAREER PATH CERTIFICATE OF COMPLETION",
    institute: "SCRIMBA",
    details: `  Graduated from an intensive 12-module bootcamp, dedicating over 70 hours to mastering advanced front-end development skills
                including React, JavaScript, HTML, CSS, and responsive web design.`,
  },
  {
    year: "2023",
    degree: "FULL STACK SOFTWARE ENGINEER CERTIFICATE OF COMPLETION",
    institute: "CODING TEMPLE",
    details: `Achieved certifications in key web technologies including Python, SQL, CSS, JavaScript, Flask, React, HTML, and NodeJS, 
        showcasing a broad and in-depth proficiency in software development. 
        These certifications represent a comprehensive understanding of both front-end and back-end development.`,
  },
  {
    year: "2011",
    degree: "BACHELOR DEGREE, COMPUTER AND INFORMATION SCIENCES ",
    institute: "DEVRY UNIVERSITY",
    details: `Completed coursework towards degree path.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
