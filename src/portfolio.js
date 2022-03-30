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
    imgPath: "image path",
    url: "http://example",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
  },
  {
    title: "project2",
    imgPath: "image path",
    url: "http://example",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
  },

  {
    title: "project3",
    imgPath: "image path",
    url: "http://example",
    projectDesc:
      "     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam, vitae, tempora placeat, quibusdam ex eum cupiditate dolorum deserunt quod dolore officiis voluptates expedita amet ipsa iste debitis quis itaque.",
  },
];

export { seo, socialMediaLinks, aboutPage, experience, project };
