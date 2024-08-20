import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with expertise in creating responsive, mobile-first web applications using modern frameworks like React.js and Next.js. With hands-on experience in advanced performance optimizations and a strong foundation in JavaScript and TypeScript, I strive to build seamless user experiences that drive engagement and growth.`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with a strong focus on building user-friendly and performant web applications. My experience spans across working with modern technologies like React.js, Next.js, Tailwind CSS, and TypeScript. I enjoy collaborating with teams to deliver visually appealing and highly functional interfaces. I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving field of web development. In my free time, I enjoy exploring new tech, contributing to open-source projects, and staying active.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Frontend Engineer",
    company: "Yatri Design Studio, Nepal",
    description: `Developed responsive web applications using Next.js ,React.js and Tailwind CSS. Collaborated with the design team to implement pixel-perfect designs and animations. Conducted code reviews and mentored junior developers on best practices.`,
    technologies: [
      "Nextjs",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    year: "Apr 2024 - Aug 2024",
    role: "Frontend Developer",
    company: "Freelancing",
    description: `Created responsive, mobile-first web applications in collaboration with UX/UI designers. Migrated legacy codebases to modern React architecture and enhanced website performance through advanced caching techniques. Worked on e-commerce projects using Next.js.`,
    technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    year: "Oct 2023 - Apr 2024",
    role: "Frontend Developer",
    company: "Virtual Gravity, Australia",
    description: `Led the frontend team in developing the company's website using Next.js and React.js. Built a Crypto Wallet app with Next.js and Redux Toolkit, achieving load times under 500ms. Developed dynamic data visualizations with Chart.js and implemented Framer Motion for smooth animations.`,
    technologies: ["Next.js", "React.js", "Redux Toolkit", "Framer Motion"],
  },
];

export const PROJECTS = [
  {
    title: "Crypto-DApps",
    image: project1,
    description:
      "A template for creating decentralized applications, featuring seamless frontend performance and engaging user experience.",
    technologies: ["React.js", "Chart.js", "Tailwind CSS", "TypeScript"],
    link: "https://crypto-dapp-template.vercel.app/",
  },
  {
    title: "Job Portal",
    image: project2,
    description:
      "A MERN stack-based platform for job seekers and employers, featuring role-specific functionalities, real-time notifications, and a responsive UI.",
    technologies: ["MERN Stack", "Tailwind CSS", "Redux"],
    link: "https://github.com/manjilkoirala/jobportal",
  },
  {
    title: "VG Website",
    image: project3,
    description:
      "A visually striking and user-centric website for a company, featuring interactive UI components and optimized performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://virtual-gravity.com/",
  },
  {
    title: "Weather APP",
    image: project4,
    description:
      "A weather application with real-time API integration for location-based weather queries, enhancing user experience.",
    technologies: ["React.js", "REST API", "Tailwind CSS"],
    link: "https://github.com/manjilkoirala/WeatherApp-latest-Reactjs",
  },
];

export const CONTACT = {
  address: "Itahari-9, Sunsari, Nepal",
  phoneNo: "+977 9816317765",
  email: "koiralamanjil7@gmail.com",
};
