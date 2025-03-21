import { IoLogoCss3, IoLogoGithub, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaBootstrap, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMinutemailer, SiMongodb, SiNextdotjs, SiSocketdotio, SiTypescript } from "react-icons/si";
import { SiShadcnui, SiExpress, SiFramer  } from "react-icons/si";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { VscJson, VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXLine, RiTailwindCssFill  } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { AiOutlineKubernetes } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFramerLogoFill } from "react-icons/pi";

export const projectsData = [
  {
    title: "Swift File Send",
    description: "Effortlessly share files in real-time with secure, fast, and reliable cross-platform compatibility, ensuring seamless collaboration and synchronization anytime.",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://swift-file-send.vercel.app/",
    githubLink: "https://github.com/TrilochanSahoo/SwiftFileSend",
    stack: [
      {
        icon: <SiTypescript size={20} />,
        name: "Typescript",
      },
      {
        icon: <FaReact size={20} />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={20} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress size={20} />,
        name: "Express",
      },
      {
        icon: <BiLogoTailwindCss size={20} />,
        name: "tailwindcss",
      },
      {
        icon: <SiSocketdotio size={20} />,
        name: "Web Sockets",
      }
    ],
  },
  {
    title: "Tech Blog App",
    description: "Develop a bloging site tech related contents.",
    imgUrl: "https://placehold.co/400",
    liveLink: "",
    githubLink: "https://github.com/TrilochanSahoo/Medium-Clone-Frontend",
    stack: [
      {
        icon: <FaReact size={20} />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs size={20} />,
        name: "Node.js",
      },
      {
        icon: <SiMongodb size={20} />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress size={20} />,
        name: "Express",
      },
      {
        icon: <BiLogoTailwindCss size={20} />,
        name: "tailwindcss",
      }
    ],
  },
  {
    title: "Expense Tracker App",
    description: "A tracker app to track monthly expences built with ReactJs, CSS3 smooth animations and a modern UI",
    imgUrl: "https://placehold.co/400",
    liveLink: "https://trilochansahoo.github.io/Expense-Tracker/",
    githubLink: "https://github.com/TrilochanSahoo/Expense-Tracker",
    stack: [
      {
        icon: <FaReact size={20} />,
        name: "Reactjs",
      },
      {
        icon: <IoLogoCss3 size={20} />,
        name: "Css",
      },{
        icon: <IoLogoJavascript size={20} />,
        name: "Javascript",
      },
    ]
  },
];
export const frontendTechStack = [
  {
    src: <IoLogoHtml5 size={50} />,
    name: "Html",
  },
  {
    src: <IoLogoJavascript size={50} />,
    name: "Javascript",
  },
  {
    src: <IoLogoCss3 size={50} />,
    name: "Css",
  },
  {
    src: <FaReact size={50} />,
    name: "React.js",
  },
  {
    src: <RiTailwindCssFill size={50} />,
    name: "Tailwind css",
  },
  {
    src: <FaBootstrap size={50} />,
    name: "Bootstrap",
  },
  {
    src: <SiTypescript size={50} />,
    name: "Typescript",
  },
  {
    src: <SiShadcnui size={50} />,
    name: "ShadCn UI",
  },
  {
    src: <SiFramer size={50} />,
    name: "Framer Motion",
  },

];
export const backendTechStack = [
  {
    src: <IoLogoNodejs size={50} />,
    name: "Node.js",
  },
  {
    src: <SiExpress size={50} />,
    name: "Express.js",
  },
  {
    src: <BiLogoMongodb size={50} />,
    name: "MongoDB",
  },
  {
    src: <TbSql  size={50} />,
    name: "SQL",
  },
  {
    src: <SiNextdotjs size={50} />,
    name: "Nextjs",
  },
  {
    src: <DiRedis  size={50} />,
    name: "Redis",
  }
   
];

export const devops = [
  {
    src: <FaDocker size={50} />,
    name: "Docker",
  },
  {
    src: <FaAws size={50} />,
    name: "Aws",
  },
  {
    src: <AiOutlineKubernetes  size={50} />,
    name: "Kubernetes",
  },
  {
    src: <VscVscode size={50} />,
    name: "VS Code",
  },
  {
    src: <IoLogoGithub size={50} />,
    name: "GitHub",
  },
]
export const experience = [
  {
    id: "1",
    label: "Ideagen EHS",
    position: "Software Developer",
    link: "https://www.ideagen.com/",
    date: "Jan 2022 - Present",
    techStack: ["React.js", "Javascript", "Node.Js","Microservices","Docker","SQL","MongoDB"],
    content: <>&#9;I worked as a developer on the App Builder Module team, where I built dynamic form builder features using ReactJS and integrated Microservices APIs to improve functionality and performance. My role involved optimizing workflows, reducing response times, and ensuring a smooth user experience through Agile collaboration.<br></br>&#9;I also focused on security, integrating MongoCrypt with MongoDB for end-to-end encryption and managing encryption keys for sensitive data. Additionally, I developed a QR code generator with flexible customization and implemented a secure file scanning system to enhance threat detection and data protection.</>
  },
];


export const dockItems = [
  {
    title: "TS",
    icon: "/dockSvg/dock-menu.svg",
    href: "#",
    newTab: false,
  },
  {
    title: "Mail",
    icon: "/dockSvg/email-circle-fill-svgrepo-com.svg",
    href: "mailto:trilochansahoo026@gmail.com",
    newTab: true,
  },
  {
    title: "GitHub",
    icon: "/dockSvg/github-dock.svg",
    href: "https://github.com/TrilochanSahoo",
    newTab: true,
  },

  {
    title: "Linked IN",
    icon: "/dockSvg/linkedin-dock.svg",
    href: "https://www.linkedin.com/in/trilochan-sahoo-6365871b6/",
    newTab: true,
  },
  {
    title: "CV",
    icon: "/dockSvg/cv-dock.svg",
    href: "https://drive.google.com/file/d/1f6mKM_4vTIT_fxVL2LBuNpq1BzdAlkYf/view?usp=drive_link",
    newTab: true,
  },
];

