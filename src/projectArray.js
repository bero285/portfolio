import landingPage from "./assets/landing-page.png";
import Sociopedia from "./assets/sociopedia.png";
import NetflixClone from "./assets/netflix-clone.png";
import CreditKey from "./assets/credit-key1.png";
import chatApp from "./assets/chatapp.jpg";
import Planets from "./assets/planets.jpg";
const projects = [
  {
    name: "Social Media App",
    tools: ["MERN Stack", "React", "Node", "Express", "MongoDB"],
    image: Sociopedia,
    website: "https://sociopedia-bero.netlify.app/",
    code: "https://github.com/bero285/Social-Media-App",
    description:
      "Social Media App that I made with the help of a tutorial. Also added several new features, including Comment section.",
  },
  {
    name: "Planets Fact Site",
    tools: ["React", "TypeScript", "Tailwind Css"],
    image: Planets,
    website: "https://bero-planet-facts.netlify.app/",
    code: "https://github.com/bero285/Planets-Fact",
    description: "Planet facts site Created with React.",
  },
  {
    name: "Netflix Clone",
    tools: ["React"],
    image: NetflixClone,
    website: "https://bero3333.netlify.app/",
    code: "https://github.com/bero285/Netflix",
    description: "Netlfix Clone created with React.",
  },
  {
    name: "Chat App",
    tools: ["React Native", "Node", "Express", "MongoDB", "socket.io"],
    image: chatApp,
    code: "https://github.com/bero285/Chat-app",
    description: "Real-time Chat Application built with React Native.",
  },
  {
    name: "Landing page",
    tools: ["Html", "Css"],
    image: landingPage,
    website: "https://bero1111.netlify.app/",
    code: "https://github.com/bero285/Front-end-website",
    description: "a simple front-end project with beautifull design.",
  },
  {
    name: "Credit App",
    tools: ["React Native"],
    image: CreditKey,
    code: "https://github.com/bero285/Commerce-App",
    description:
      "React native Application with beautifull design and functionality.",
  },

];

export default projects;
