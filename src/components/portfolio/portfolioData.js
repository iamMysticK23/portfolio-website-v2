

// portfolio images
import trektracker1 from "../../assets/img/portfolio/trektracker.png"
import theblogspot1 from "../../assets/img/portfolio/tbs_4.jpeg"
import weatherapp1 from "../../assets/img/portfolio/weatherapp3.png"
import passwordgenerator from "../../assets/img/portfolio/password-gen1.png"
import colorschemegenerator from "../../assets/img/portfolio/color-scheme3.png"
import personaldashboard from "../../assets/img/portfolio/dashboard1.png"
import grocerylist from "../../assets/img/portfolio/grocery-list.png"
import memegen1 from "../../assets/img/portfolio/meme-gen1.png"
import tenzies1 from "../../assets/img/portfolio/tenzies1.png"

const PortfolioData = [
  {
    id: 1,
    type: "trektracker - react web application",
    image: trektracker1,
    tag: ["react"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Hiking and biking trail finder",
        client: "Coding Temple",
        language: "HTML, CSS, TypeScript",
        framework: "ReactJS, NodeJS",
        preview: "Live Demo",
        link: "https://trektracker-app.web.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/CT_CapstoneProject_TrekTracker"
      },
    ],
  },
  {
    id: 2,
    type: "the blog spot - flask web application",
    image: theblogspot1,
    tag: ["flask"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Blog site",
        client: "Coding Temple",
        language: "HTML, CSS, Python",
        preview: "Live Demo",
        link: "https://theblogspot-xh32.onrender.com/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/W6_WeekendAssignment"
      },
    ],
  },
  {
    id: 3,
    type: "dynamic weather app",
    image: weatherapp1,
    tag: ["css", "javascript"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "dynamic weather app",
        client: "Coding Temple",
        language: " HTML, CSS, JavaScript",
        preview: "Live Demo",
        link: "https://ke-weather-app.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/W7-WeekendHW"
      },
    ],
  },
  {
    id: 4,
    type: "secure password generator",
    image: passwordgenerator,
    tag: ["css", "javascript"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "secure password generator",
        client: "Personal Project",
        language: "HTML, CSS, JavaScript",
        preview: "Live Demo",
        link: "https://password-generator-ke.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/password-generator-ke"
      },
    ],
  },
  {
    id: 5,
    type: "color scheme generator",
    image: colorschemegenerator,
    tag: ["css", "javascript"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "color scheme generator",
        client: "Scrimba",
        language: "HTML, CSS, JavaScript",
        preview: "Live Demo",
        link: "https://color-scheme-generator-ke.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/color-scheme-generator-ke"
      },
    ],
  },
  {
    id: 6,
    type: "google chrome dashboard",
    image: personaldashboard,
    tag: ["javascript", "css"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "google chrome dashboard",
        client: "Personal Project",
        language: "HTML, CSS, Javascript",
        preview: "Live Demo",
        link: "https://personal-dashboard-ke.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/personal-dashboard-ke"
      },
    ],
  },
  {
    id: 7,
    type: "tenzies - react app",
    image: tenzies1,
    tag: ["react", "css"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "tenzies - react app",
        client: "Scrimba",
        language: "HTML, CSS",
        framework: "ReactJS",
        preview: "Live Demo",
        link: "https://tenzies-game-ke.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/tenzies-game-ke"
      },
    ],
  },
  {
    id: 8,
    type: "meme generator - react app",
    image: memegen1,
    tag: ["react" , "css"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "meme generator - react app",
        client: "Scrimba",
        language: "HTML, CSS",
        framework: "ReactJS",
        preview: "Live Demo",
        link: "https://ke-meme-generator.netlify.app/",
      },
    ],
  },
  {
    id: 9,
    type: "grocery list - mobile app",
    image: grocerylist,
    tag: ["javascript", "css"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Personal Project",
        client: "Personal Project",
        language: "HTML, CSS",
        preview: "Live Demo",
        link: "https://grocery-list-ke.netlify.app/",
        github: "GitHub Repository",
        ghlink: "https://github.com/iamMysticK23/grocery-list-mobile-app"
      },
    ],
  },
];

export default PortfolioData;
