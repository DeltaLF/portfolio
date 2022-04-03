import cert1 from "./resources/images/certificate/javascript_weired_part.jpg";
import cert2 from "./resources/images/certificate/modern_react.jpg";
import cert3 from "./resources/images/certificate/mysql_bootcamp.jpg";
import cert4 from "./resources/images/certificate/web_dev.jpg";
import cert5 from "./resources/images/certificate/web_dev_bootcamp.jpg";

import project1 from "./resources/images/project/onlineCourse.jpg";
import project2 from "./resources/images/project/videos.jpg";
import project3 from "./resources/images/project/yelpCamp.jpg";

import portrait from "./resources/images/me/me.jpg";

const seo = {
  title: "Patrick's Portfolio",
  description: "Hi I am Partick! I am learning coding now.",
  og: {
    title: "Patrick Tasi Portfolio",
    type: "website",
    url: "https://github.com/DeltaLF",
  },
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/DeltaLF",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const header = {
  intro: ["Hello World!", 1000, "I'm xxx, a web developer", 3000],
};

const experience = [
  {
    date: "2021 - present",
    title: "Job titleII",
    icon: "fab fa-js",
    jobDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
    skillList: ["javascript", "react", "html", "css"],
  },
  {
    date: "2018 - present",
    title: "Job title",
    icon: "fab fa-python",
    jobDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
    skillList: ["python", "airflow"],
  },
];

const aboutPage = {
  aboutMe: [
    "I am currently an anti-virus analyst who is responsible for reading and analyzing other people’s code. During this process I gradually realize that what I want is more than just watching. I also want to create something (of course not malicious things) so I start to take online courses from Udemy and now I am able to build website with MERN stack. I found joy and sense of achievement in learning and building website. ",
    " In my free time I love to go outdoor. Hiking, swimming, biking are all included. Maybe I just like to move it!",
  ],
  portaitPath: portrait,
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "ion-logo-python",
      style: {
        backgroundColor: "transparent",
        color: "#3776AB",
      },
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        color: "#E34F26",
      },
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fa-css3",
      style: {
        color: "#1572B6",
      },
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        backgroundColor: "#000000",
        color: "#F7DF1E",
      },
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        color: "#339933",
      },
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "simple-icons:npm",
      style: {
        color: "#CB3837",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#47A248",
      },
    },
  ],
};

const project = [
  {
    title: "Online Course MERN project",
    imgPath: project1,
    url: "https://github.com/DeltaLF/online-course",
    projectDesc:
      "Start from scratch to build a online learning website based on MERN stack (MongoDB, Express, React, NodeJS).  Authentication is implemented by jwt token. You can register an account to create course, subscribe course, put course in shop cart. Also, there is a new students promotion only existing in new user for 5 hours which is implemented by localStorage.",
  },
  {
    title: "Video Search React project",
    imgPath: project2,
    url: "https://github.com/DeltaLF/video-app",
    projectDesc:
      "A React front end website that can search youtube videos, wikipedia by making api request. The api request is made through Netlify serverless function to prevent api key being accessed directly.",
  },

  {
    title: "Yelp Camp Node Express project",
    imgPath: project3,
    url: "https://github.com/DeltaLF/yelpcamp-",
    projectDesc:
      "A project modified from The Web Developer Bootcamp. This site is built by node, express, ejs, mongodb atlas and it can be used to create and share camp information. I add some extra features that are passport Google login, review editable, middleware to check login status, user image schema, user able to be deleted.",
  },
];

const certificates = [
  { title: "Javascript", imgPath: cert1 },
  { title: "React", imgPath: cert2 },
  { title: "MsySQL", imgPath: cert3 },
  { title: "Full stack", imgPath: cert4 },
  { title: "Full stack", imgPath: cert5 },
];
export {
  seo,
  header,
  socialMediaLinks,
  aboutPage,
  experience,
  project,
  certificates,
};
