import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  youtube,
  nikchat,
  metaverse,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'works',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Nikhil proved me wrong.',
    name: 'Arpit Pareek',
    designation: 'CF',
    company: 'Eduncle',
    image:
      'https://media.licdn.com/dms/image/D4D03AQGwfcmWiUGz0Q/profile-displayphoto-shrink_400_400/0/1675084911782?e=1689206400&v=beta&t=EXfWgp8YkV82VW653wzvAtLQMMRwKsYroFmOKj-hFuA',
    linkedIn: 'https://www.linkedin.com/in/arpit-pareek/',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nikhil does.",
    name: 'Hardik',
    designation: 'Founder',
    company: 'Smelco',
    image:
      'https://media.licdn.com/dms/image/C4D03AQEfXmcWT9seZg/profile-displayphoto-shrink_400_400/0/1662461112012?e=1689206400&v=beta&t=dXDXbhAN33vjt64R7_ToxoS2PmQPtXYYwzuw7IXlPFQ',
    linkedIn: 'https://www.linkedin.com/in/hardiksambhwani/',
  },
  {
    testimonial:
      "After Nikhil optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Ankit Rathi',
    designation: 'MNGR',
    company: 'Rathi Brothers',
    image:
      'https://media.licdn.com/dms/image/C4D03AQHoBKHq-ZAd0Q/profile-displayphoto-shrink_400_400/0/1517059430368?e=1689206400&v=beta&t=By8HeQJSFj5itk4erksIhV1NhyoPWKUN0x46WCAMxjk',
    linkedIn: 'https://www.linkedin.com/in/ankit-rathi-a4605024/',
  },
];

const projects = [
  {
    name: 'My-Tube: Video Streaming App',
    description:
      'A web-based platform that allows users to search, stream, and watch content of all types has transformed the way we consume entertainment. With a vast library of movies, TV shows, documentaries, music videos, and more, these platforms provide a convenient and efficient solution for entertainment.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/niikkhilsharma/Video_Streaming_app',
    projectLink: 'https://niikkhilsharma-videostreaming.netlify.app/',
  },
  {
    name: 'Metaversus: welcome to metaverse',
    description:
      'Step into a world where reality meets the virtual. Our website is your gateway to the incredible realm of the Metaverse—a place where imagination knows no bounds. Prepare to be captivated by a mesmerizing journey of sights, sounds, and interactions that will redefine your digital existence.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'netlify',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/niikkhilsharma/MyMetaverse',
  },
  {
    name: 'Nik-Chat: Online Chatting',
    description:
      'Web application with a simplified and interactive user interface that allows users to communicate with each other in real-time. The application offer features such as instant messaging, group chats, and the ability to send multimedia content like images and videos. ',
    tags: [
      {
        name: 'emailjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: nikchat,
    source_code_link: 'https://github.com/niikkhilsharma',
  },
];

export { services, technologies, testimonials, projects };
