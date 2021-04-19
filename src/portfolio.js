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
    "A motivated Software Engineer with experience in UI research and hardware prototyping. I love reading books, tinkering and filming my friends having fun."
  ),
  resumeLink: "./assets/documents/georgcv.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://bit.ly/cvgeorg-in",
  github: "https://bit.ly/cvgeorg-git",
  gmail: "georg.roehl@rwth-aachen.de",
  youtube: "https://bit.ly/cvgeorg-yt",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RWTH Aachen University",
      logo: require("./assets/images/rwth.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "Oktober 2018 - April 2021",
      desc:
        "The Computer Science Master's course at RWTH is split into the following four thematic areas in addition to one applied subject. The list also names some of the courses I took part in. My thesis, which was graded with 1.0, is listed in the category Projects.",
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Human-Computer Interaction",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Work Experiences",
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "User Interface Designer",
      company: "Institute for Automotive Engineering (ika)",
      companylogo: require("./assets/images/ikaLogo.webp"),
      date: "März 2019 – Juni 2020",
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
      date: "Oktober 2015 - Dezember 2018",
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Theses",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Personal Projects",
  subtitle:
    "Theses, projects or seminars i did, be it at RWTH or private purposes. The links lead to external websites.",

  achievementsCards: [
    {
      title: "Master Thesis",
      subtitle:
        "Tilt-Watch: Inclination-Based Smartwatch Input in Relation to the Forearm",
      image: require("./assets/images/codeInLogo.webp"),
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
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Download",
          url: "https://hci.rwth-aachen.de/publications/roehl2018a.pdf"
        }
      ]
    },
    {
      title: "Accenture Campus Innocation Challenge",
      subtitle:
        "We developed a business plan, prototype and marketing video for an augmented reality application for first responders.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Watch Video on Youtube",
          url: "https://youtu.be/pU3sWfIs__M"
        }
      ]
    },

    {
      title: "Designing Interactive Systems",
      subtitle:
        "We applied iterative design, prototyping and evaluation methods and produced a video, that showcases our software. Also, we subtly included the then-current Dieselgate.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Watch Video on Youtube",
          url: "https://www.youtube.com/watch?v=rqsjrmug2ZQ"
        }
      ]
    },

    {
      title: "Lab: Smart Facades for Smart Houses",
      subtitle:
        "Our Arduino powered Moss&Solar Facade won the Instructables Home Technology Contest.",
      image: require("./assets/images/pwaLogo.webp"),
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

// Blogs Section

const blogSection = {};

// Podcast Section

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "",
  number: "+49 176 6306 7175",
  email_address: "georg.roehl@rwth-aachen.de"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
