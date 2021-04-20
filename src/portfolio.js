/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Georg Rohl",
  title: "Hi all, I'm Georg",
  subTitle: emoji(
    "A motivated Software Engineer with experience in UI research and hardware prototyping. I love reading books, tinkering and recording video."
  ),
  resumeLink: "https://github.com/georgroehl/georgroehl/raw/main/georgcv.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://bit.ly/cvgeorg-in",
  github: "https://bit.ly/cvgeorg-git",
  gmail: "georg.roehl@rwth-aachen.de",
  youtube: "https://bit.ly/cvgeorg-yt",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Concept development of user interfaces with high usability and high learnability."
    ),
    emoji(
      "⚡ Researching new interaction techniques and evaluating their application in the real world."
    ),
    emoji(
      "⚡ Development and implementation of interfaces, be it hardware or software."
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C, C++",
      fontAwesomeClassname: "fas fa-copyright"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Adobe CC",
      fontAwesomeClassname: "fas fa-file-pdf"
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Principle",
      fontAwesomeClassname: "fab fa-product-hunt"
    },
    {
      skillName: "Linux Shell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "3D Printing",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Soldering & PCB",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Hardware",
      fontAwesomeClassname: "fas fa-wrench"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "RWTH Aachen University",
      logo: require("./assets/images/rwth.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "Oktober 2018 - April 2021",
      desc:
        "The Computer Science Master's course at RWTH is split into the following four thematic areas in addition to one applied subject. The list also names some of the courses I took part in. My thesis, which was graded with 1.0, is presented under Projects.",
      descBullets: [
        "Applied Computer Science (e.g. Media Computing and HCI, Designing Interactive Systems, Virtual Reality)",
        "Theoretical Computer Science (e.g. Compiler Construction, Advanced Automata Theory)",
        "Software and Communication (e.g. Mobile Internet Technology, Innovations in Software Engineering)",
        "Data and Information Management (e.g. Information Management for Public Transport, Privacy Enhancing Technologies for Data Science)",
        "Applied Subject Medicine (e.g. Medical Informatics, Medical Information Systems, Technical Communication in Medical Engineering)"
      ]
    },
    {
      schoolName: "RWTH Aachen University",
      logo: require("./assets/images/rwth.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Oktober 2012 - September 2018",
      desc:
        "The Computer Science Bachelor's course at RWTH is split in the same thematic areas but contains mostly set courses. To ensure a higher degree of interdisciplinary skills, students have to chose an elective subject of application during their bachelor programm. My thesis at the chair for Human-Computer Interaction, which was graded with 1.0, is listed in the category Projects.",
      descBullets: []
    }
  ]
};

const workExperiences = {
  title: "Work Experiences",
  display: true,
  experience: [
    {
      role: "User Interface Designer",
      company: "Institute for Automotive Engineering (ika)",
      companylogo: require("./assets/images/ikaLogo.webp"),
      date: "Mar 2019 – Jun 2020",
      desc:
        "The Institute for Automotive Engineering (ika) researches the vehicle including its systems and their interdependencies. During my time at the ika I worked in the Resaerch Area Vehicle Concepts & HMI.",
      descBullets: [
        "concept development of interactive prototypes for user interfaces of infotainment systems",
        "development and implementation of a user-friendly CAN-bus data logger",
        "implementation of cocepts for the battery indicator in electric vehicles"
      ]
    },
    {
      role: "Student Assistant",
      company: "Institute of Medical Psychology and Medical Sociology",
      companylogo: require("./assets/images/impmsLogo.webp"),
      date: "Oct 2015 - Dec 2018",
      desc:
        "The IMPMS conducts research on neuronal, psychological and social aspects of metacognitive processes. In simple terms these are processes by which people gain 'knowledge about themselves and other people'.",
      descBullets: [
        "Level I and II Support for the IT infrastructure",
        "programming of psychological reaction time experiments with a dedicated scripting language",
        "revision of a Matlab procedure for automated evaluation of peripheral physiological signals"
      ]
    },
    {
      role: "Software Developer",
      company: "GRÜN Software Group",
      companylogo: require("./assets/images/gruenLogo.webp"),
      date: "Feb 2014 - Sep 2015",
      desc:
        "GRÜN Software Group offers software solutions, especially for the target groups organizations and associations, donation organizations, education providers, publishers and media houses and time management.",
      descBullets: [
        "design of mask views on MS-SQL and MySQL databases",
        "set-up of the software product according to customer requirements",
        "SQL query optimisation"
      ]
    }
  ]
};

const achievementSection = {
  title: "Personal Projects",
  subtitle:
    "Theses, projects or seminars i did, be it at RWTH or for private purposes. The links below lead to external websites.",

  achievementsCards: [
    {
      title: "Master Thesis",
      subtitle:
        "Tilt-Watch: Inclination-Based Smartwatch Input in Relation to the Forearm",
      image: require("./assets/images/imageMA.webp"),
      footerLink: [
        {
          name: "Abstract",
          url: "https://hci.rwth-aachen.de/roehl"
        },
        {
          name: "Download",
          url: "https://hci.rwth-aachen.de/publications/roehl2021a.pdf"
        }
      ]
    },
    {
      title: "Bachelor Thesis",
      subtitle: "Interactive Brooches: Physical Interfaces on Smart Textiles",
      image: require("./assets/images/imageBA.webp"),
      footerLink: [
        {
          name: "Download",
          url: "https://hci.rwth-aachen.de/publications/roehl2018a.pdf"
        }
      ]
    },
    {
      title: "Accenture Campus Innovation Challenge",
      subtitle:
        "We developed a business plan, prototype and marketing video for an AR application for first responders.",
      image: require("./assets/images/imageEMAR.webp"),
      footerLink: [
        {
          name: "Watch Video on Youtube",
          url: "https://youtu.be/pU3sWfIs__M"
        }
      ]
    },
    {
      title: "My Personal Blog",
      subtitle:
        "At the beginning of 2021 I started my own blog. Here, I write german articles about Smart Homes and technology.",
      image: require("./assets/images/imagePR.webp"),
      footerLink: [
        {
          name: "Visit Website",
          url: "https://permanentrecord.xyz/"
        }
      ]
    },

    {
      title: "Designing Interactive Systems",
      subtitle:
        "We applied iterative design, prototyping and evaluation methods and produced a video, that showcases our software. Also, we subtly included the then-current Dieselgate.",
      image: require("./assets/images/imageDIS.webp"),
      footerLink: [
        {
          name: "Watch Video on Youtube",
          url: "https://www.youtube.com/watch?v=rqsjrmug2ZQ"
        }
      ]
    },

    {
      title: "Smart Facades for Smart Houses",
      subtitle:
        "Our Arduino powered Moss&Solar Facade won the Instructables Home Technology Contest and has over 13000 views.",
      image: require("./assets/images/imageMoss.webp"),
      footerLink: [
        {
          name: "Lab Description",
          url: "https://hci.rwth-aachen.de/m3-ss14"
        },
        {
          name: "View on Instructables",
          url:
            "https://www.instructables.com/Ardunio-powered-MossSolar-Facade-Element/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "M. Sc. RWTH Georg Röhl",
  number: "",
  email_address: "georg.roehl@rwth-aachen.de"
};

const techStack = {
  viewSkillBars: false,
  displayCodersrank: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  display: false
};

const blogSection = {};

const twitterDetails = {
  userName: "",
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
