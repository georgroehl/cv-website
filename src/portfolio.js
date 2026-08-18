/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Georg Röhl",
  title: "Hi, I'm Georg",
  subTitle: emoji(
    "Embedded Software Engineer in Berlin, leading product development and building reliable embedded systems, AI-powered applications, and developer workflows."
  ),
  resumeLink: "https://github.com/georgroehl/georgroehl/raw/main/georgcv.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/georg-roehl/",
  github: "https://github.com/georgroehl",
  gmail: "georg.roehl@rwth-aachen.de",
  youtube: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I build",
  subTitle: "Embedded systems, AI engineering, and product delivery",
  skills: [
    emoji(
      "⚡ Embedded software in C and C++ with Yocto, FreeRTOS, IPC, CAN, CANopen, MQTT, and HTTP."
    ),
    emoji(
      "⚡ AI-powered applications and agentic workflows using GitHub Copilot, Claude Code, OpenAI Codex, SpaceXAI Cursor, and Microsoft 365 Copilot."
    ),
    emoji(
      "⚡ Technical leadership for teams of up to 15 developers, from stakeholder communication and requirements to cross-functional delivery."
    )
  ],

  softwareSkills: [
    {
      skillName: "AI Agents",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "C & C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Yocto & Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "FreeRTOS",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "CAN & MQTT",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "VMware",
      fontAwesomeClassname: "fas fa-server"
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
      duration: "Oct 2018 - Apr 2021",
      desc: "Focused on Human-Computer Interaction with Medicine as an applied subject. My master's thesis, Tilt-Watch, combined embedded prototyping, interaction design, and a user study and was graded 1.0.",
      descBullets: [
        "Human-Computer Interaction, media computing, and interactive systems",
        "Embedded prototyping with ESP32, Bluetooth Low Energy, and iOS",
        "Final grade: 1.8"
      ]
    },
    {
      schoolName: "RWTH Aachen University",
      logo: require("./assets/images/rwth.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Oct 2012 - Sep 2018",
      desc: "Studied Computer Science with Medicine as an applied subject. My bachelor's thesis, Interactive Brooches, explored physical interfaces on smart textiles and was graded 1.0.",
      descBullets: []
    }
  ]
};

const workExperiences = {
  title: "Professional Experience",
  display: true,
  experience: [
    {
      role: "Embedded Software Engineer",
      company: "Hach",
      companylogo: require("./assets/images/hachLogo.png"),
      date: "Oct 2021 - Present · Berlin",
      desc: "I lead embedded and AI-centered product development, connecting technical delivery with clear stakeholder communication.",
      descBullets: [
        "Lead a team of up to 15 developers on a new-product development project",
        "Build and deploy AI-powered applications and shape agentic engineering workflows",
        "Design embedded software in C and C++ using Yocto and FreeRTOS",
        "Develop communication drivers for IPC, CAN, MQTT, and HTTP",
        "Translate priorities into scoped work packages and communicate progress to stakeholders"
      ]
    },
    {
      role: "User Interface Designer",
      company: "Institute for Automotive Engineering (ika)",
      companylogo: require("./assets/images/ikaLogo.webp"),
      date: "Mar 2019 – Jun 2020",
      desc: "Worked in the Vehicle Concepts & HMI research area on interactive automotive systems.",
      descBullets: [
        "Developed interactive prototypes for infotainment systems",
        "Implemented a user-friendly CAN-bus data logger",
        "Created battery-state display concepts for electric vehicles"
      ]
    },
    {
      role: "Student Assistant",
      company: "Institute of Medical Psychology and Medical Sociology",
      companylogo: require("./assets/images/impmsLogo.webp"),
      date: "Oct 2015 - Dec 2018",
      desc: "Supported research at the intersection of psychology, medicine, and software.",
      descBullets: [
        "Provided first- and second-level IT support",
        "Programmed psychological reaction-time experiments",
        "Revised MATLAB procedures for automated analysis of physiological signals"
      ]
    },
    {
      role: "Software Developer",
      company: "GRÜN Software Group",
      companylogo: require("./assets/images/gruenLogo.webp"),
      date: "Feb 2014 - Sep 2015",
      desc: "Configured database-backed software products for customer requirements.",
      descBullets: [
        "Designed views for MS SQL and MySQL databases",
        "Configured software products for customer requirements",
        "Optimized SQL queries and documented internal workflows"
      ]
    }
  ]
};

const achievementSection = {
  title: "Selected Projects",
  subtitle:
    "Research and hands-on projects spanning embedded systems, interaction design, and prototyping.",

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
        "A German-language blog about smart homes, technology, and hands-on experimentation.",
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
          url: "https://www.instructables.com/Ardunio-powered-MossSolar-Facade-Element/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's connect"),
  subtitle: "Embedded Software Engineer · Berlin, Germany",
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
