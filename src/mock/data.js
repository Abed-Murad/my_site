import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abed Murad', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey! I'm",
  name: 'Abed Murad',
  subtitle: "I'm an Android Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'canvas.png',
  paragraphOne:
    "I'm a Google-certified Android Engineer, with 4 years of experience leveraging Kotlin & Java to produce robust, well-architected apps based on my advanced CS knowledge.",
  paragraphTwo:
    'My main interests are: Software architecture, Comparative Programming, Running and entrepreneurship.',
  paragraphThree:
    'Work philosophy: Communication and collaboration with others is the key to great work, nothing really interesting is ever built alone!',
  resume: 'https://www.linkedin.com/in/abed-murad/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'homoola.png',
    title: 'Homoola ',
    info: 'Homoola Captain for Trucks.',
    info2:
      'A state of the art transportation platform that provides its clients with the perfect solution for all their land transportation needs in one place.',
    url: 'https://play.google.com/store/apps/details?id=com.Homoola.HomoolaCaptain&hl=en',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fans_republic.png',
    title: 'Fans Republic',
    info: 'The 1st Football Social Network.. all about football in one place!',
    info2: 'Stay updated with live football events 24/7, while enjoying your time..',
    url: 'https://play.google.com/store/apps/details?id=com.am.fansrepublic',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'youth_council.png',
    title: 'Youth Council',
    info: 'An internal communication app for the local Youth councils.',
    info2:
      'A way to send and receive data vertically and horizontally inside the councils hierarchical structure.',
    url: 'https://play.google.com/store/apps/details?id=org.syfpal.application',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'carly.png',
    title: 'Carly',
    info: 'A peer-to-peer car sharing marketplace.',
    info2:
      'Carly helps cars owners to hearn some extra money by ranting there cars to tenants in prices 30% lower than the car rental agencies.',
    url: 'https://github.com/Abed-Murad/carly',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ya_msahel.png',
    title: 'Ya Msahel',
    info: 'YaMsahel An online accommodation booking.',
    info2:
      'YaMsahel is a clone of Yamsafer, an online booking platform for flights tickets and hotel rooms.',
    url: 'https://github.com/Abed-Murad/YaMsahel',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movies_app.png',
    title: 'Popular Movies',
    info:
      'A place where you can discover the most popular, the most rated or the highest rated movies.',
    info2:
      'Save favorite movies locally to view them even when offline, watch trailers and Read reviews.',
    url: 'https://github.com/Abed-Murad/ND_Popular-Movies',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dev.abed.murad@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Abed__Murad',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abed-murad/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Abed-Murad/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
