import cert1 from "./resources/images/certificate/javascript_weired_part.jpg";
import cert2 from "./resources/images/certificate/modern_react.jpg";
import cert3 from "./resources/images/certificate/mysql_bootcamp.jpg";
import cert4 from "./resources/images/certificate/web_dev.jpg";
import cert5 from "./resources/images/certificate/web_dev_bootcamp.jpg";

import project1 from "./resources/images/project/onlineCourse.jpg";
import project2 from "./resources/images/project/videos.jpg";
import project3 from "./resources/images/project/yelpCamp.jpg";

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
  aboutMe: "    Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  portaitName: "portrait_exapmle.jpg",
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
    title: "project1",
    imgPath: project1,
    url: "https://github.com/DeltaLF/online-course",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
  },
  {
    title: "project2",
    imgPath: project2,
    url: "https://github.com/DeltaLF/video-app",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
  },

  {
    title: "project3",
    imgPath: project3,
    url: "https://github.com/DeltaLF/yelpcamp-",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
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
