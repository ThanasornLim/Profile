import {
  Facebook,
  LinkedIn,
  WebOutlined,
  AssignmentOutlined,
  GitHub,
} from "@material-ui/icons/";

// import profileImg from "../assets/images/profileImg.png";
import miat from "../assets/images/miat.PNG";
import maitLogo from "../assets/images/miatLogo.PNG";
import resume from "../assets/images/Thanasorn-resume.pdf";

export const resumeData = {
  name: "Thanasorn Limsangaworanan",
  title: "Web Developer",
  birthdate: "29 September 1998",
  email: "th.thanasorn.lim@gmail.com",
  address: "58 Village No. 3 Patong Hatyai Songkhla ",
  postalNumber: "90230",
  profile_img: "https://i.ibb.co/tX3zwrk/profile-Img.png",
  resume_download: {
    name: "Thanasorn-resume.pdf",
    link: resume,

  },
  about_me:
    "Entry-level programmer with hard-working, flexible, and problem-solving skill. Interested in web or mobile application development.",
  // profile_img: profileImg,
  job: "-",
  phone: "093 772 7909",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/thanasorn.limsangaworranant",
      text: "Thanasorn L.",
      textFull: "Thanasorn Limsangaworranan",
      icon: <Facebook style={{ fill: "#3b5998" }} />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/thanasorn-limsangaworanan-b04b351b2",
      text: "Thanasorn L.",
      textFull: "Thanasorn Limsangaworranan",
      icon: <LinkedIn style={{ fill: "#0072b1" }} />,
    },
    Github: {
      link: "https://github.com/6010210107",
      text: "Thanasorn L.",
      textFull: "Thanasorn Limsangaworranan",
      icon: <GitHub style={{ fill: "#333" }} />,
    },
  },
  experiences: [
    {
      title: "National Science and Technology Development Agency",
      intern: "Internship",
      department: "National Security and Dual-use Technology Center (NSD)",
      role: "Researcher Assisstant",
      date: "1 December 2020 - 31 March 2021",
      description: "Coorperative working as ",
      resp_work: "Part of the team develop Smart Parking Application",
      resp_work_list: [
        "Design application layout",
        "API development",
        "Create and manage MySQL database",
        "Testing",
      ],
    },
  ],
  education: [
    {
      department: "Information Communication Technology",
      degree: "Bachelor degree",
      university: "Prince of Songkla University",
      gpa: "3.37",
      date: "15 August 2017 - 10 April 2021",
      courses: [
        "Visual Art and Design",
        "Web development and design",
        "Algorithms and Data Structure",
        "Object-Oriented Programming",
        "Computer Network",
        "Database management",
        "Mobile Application Development",
        "Web Services Technology",
      ],
    },
  ],
  services: [
    {
      title: "Web development",
      description:
        "Develop robust web view and mobile view web applications following the customer options.",
      icon: <WebOutlined color="primary" />,
    },
    {
      title: "RESTful API development",
      description: "Develop RESTful API support to application.",
      icon: <AssignmentOutlined color="primary" />,
    },
  ],
  skills: [
    {
      title: "Language",
      description: ["JavaScript", "CSS", "HTML", "Python"],
    },
    {
      title: "Front-End",
      description: ["ReactJs", "Bootstrap", "Material UI"],
    },
    {
      title: "Back-End",
      description: ["Node.js", "PHP"],
    },
    {
      title: "Database",
      description: ["MySQL"],
    },
    // {
    //   title: "Other skill",
    //   description: ["SCRUM/AGILE", "RESTful API", "Omise payment"],
    // },
    
  ],

  projects: [
    {
      menu: "Vanilla HTML/CSS/JS",
      img_sm: maitLogo,
      image: miat,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap 4",
        "QIIME2",
        "D3.js",
        "PHP",
        "MySQL",
      ],
      title: "Metagenomic Information Analysis Tool",

      description: (
        <span>
          <b>Metagenomic information analysis tool web application
          (MIAT)</b> is a web application provides utilities for analyzing the 16s rRNA
          from each sample to specify the type of specy each sample and
          display the result in several way such as line chart, stack bar chart
          or export to pack of .csv file.
          <br/>
          <br/>
          <span>
            <b>Note: </b> This project's source code is not available because of ICT department's license agreement. 
          </span>
        </span>
      ),
      caption:
        "MIAT is an application that provide the easy process to analyze the 16s rRNA",
      links: [
        { link: "#", icon: <></> },
        { link: "#", icon: <></> },
      ],
    },
    // {
    //   menu: "React",
    //   img_sm: img2,
    //   image: img2,
    //   title: "Project 2",
    //   description: "This is project 2. ",
    //   caption: "Short description 1",
    //   links: [
    //     { link: "#", icon: <YouTube /> },
    //     { link: "#", icon: <GitHub /> },
    //   ],
    // },
    // {
    //   menu: "JavaScript",
    //   img_sm: img1,
    //   image: img1,
    //   title: "Project 3",
    //   caption: "Short description 1",
    //   description: "This is project 3. ",
    //   links: [
    //     { link: "#", icon: <YouTube /> },
    //     { link: "#", icon: <GitHub /> },
    //   ],
    // },
  ],
};
