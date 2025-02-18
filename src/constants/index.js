import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import tasteland from "../assets/tasteland.png";
import emlak from "../assets/emlak.jpg";
import keune from "../assets/keune.png";
import uactros from "../assets/uactros.png";
export const HERO_CONTENT = `I am a React Native developer with a strong focus on creating high-performance, cross-platform mobile applications. With expertise in JavaScript, React, and API integration, I build scalable, responsive, and user-centric solutions. I am passionate about learning and thrive in dynamic environments, contributing to innovative projects while continuously enhancing my skills.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "React Native Developer",
    company: "IDLogix (Pvt) Limited",
    description: `At IDLogix, I have experience designing and building mobile applications for both iOS and Android platforms. I am proficient in creating reusable components and optimizing application performance to ensure a smooth user experience.`,
    technologies: [
      "React Native",
      "Javascript",
      "React.js",
      "Redux ToolKit",
      "Tailwind CSS",
    ],
  },
  {
    year: "Sep 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "ZStronics (Pvt) Limited",
    description: `Worked as a front-end developer in technologies like
HTML, CSS, Bootstrap and JavaScript. Writing website
code with programming language such as HTML, CSS
Bootstrap and JavaScript. Producing, maintaining and
modifying websites and user interfaces.`,
    technologies: ["HTML", "CSS", "JavaScript", "BootStrap"],
  },
  {
    year: "May 2021 - Aug 2021",
    role: "Frontend Developer",
    company: "Interwood Mobel",
    description: `Worked as a front-end developer, gaining hands-on experience in HTML and CSS to build responsive, user-friendly web pages. Focused on crafting clean, maintainable code and improving website design and functionality.`,
    technologies: ["HTML", "CSS"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Tasteland App",
    image: tasteland,
    description:
      "Crafted seamless logic in the Tasteland app, boosting seller engagement with 300+ completed orders weekly. Launched a robust solution for sellers to visit local shops and villages, adopted by 150+ sellers, driving increased regional sales. Implemented offline functionality for smooth order-taking in low-connectivity areas.",
    technologies: ["React Native", "React", "FastAPI", "Firebase", "Redux"],
  },
  {
    title: "Keune Pakistan",
    image: keune,
    description:
      "Leading the development of the Keune Pakistan app, focused on delivering a seamless digital experience for Keune's hair care users. Overseeing key feature design and implementation to meet business needs with a user-friendly interface, while ensuring efficient backend integration and high performance.",
    technologies: [
      "React Native",
      "React",
      "FastAPI",
      "Firebase",
      "Redux ToolKit",
    ],
  },
  {
    title: "Infinity Emlak",
    image: emlak,
    description:
      "For Infinity Emlak, developed a responsive and intuitive UI, allowing users to view apartments, transaction history, ledger, property details, and due payments, ensuring a smooth user experience. Collaborated closely with the development team to integrate the UI with backend logic for seamless navigation.",
    technologies: ["React Native", "React", "RestAPI"],
  },
  {
    title: "Infinity U-actros",
    image: uactros,
    description:
      "For Infinity Uactros, crafted a user-friendly interface with similar functionality, ensuring responsive design and efficient interaction between the app's UI and backend logic to provide a streamlined user experience.",
    technologies: ["React Native", "React", "RestAPI"],
  },
];

export const CONTACT = {
  address: "Shalimar Town, Lahore, Pakistan ",
  phoneNo: "+92 321 4422320",
  email: "mohidtahir12@gmail.com",
};
