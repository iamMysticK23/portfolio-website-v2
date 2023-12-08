import React, { useState } from "react";
import Modal from "react-modal";
import mainImg from "../../assets/img/hero/portfolio-main-img.png";
import heroImgMobile from "../../assets/img/hero/hero-img-mobile.png";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: mainImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "kenai epps",
  heroDesignation: "Tech Enthusiast",
  heroDescriptions: `
  ▪️💻 I am a jack of all trades when it comes to tech! I possess a diverse range of technical skills, making me versatile in various areas of technology. 
  I am seeking a stable career in the tech industry where I can demonstrate my distinctive skill set and contribute to solving challenges!

▪️📚 My diverse background, which spans from retail management to dedicated truck driving, has equipped me with skills in leadership, communication, problem-solving, and time management. 

▪️📷 I have also developed a passion for digital artistry, using tools like Final Cut Pro, Adobe Photoshop, and Adobe Lightroom to craft visual narratives. 

▪️📲 I apply these skills and passions mostly to web development, using technologies like React JS, TypeScript, JavaScript, HTML, and CSS to bring abstract concepts to digital life. 

👉🏽 I am always eager to learn new tools and techniques and to collaborate with other developers and designers. Reach out to me on LinkedIn!`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
