import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abed Murad', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Abed Murad',
  subtitle: "I'm an Android Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'canvas.png',
  paragraphOne:
    "I'm a Google-certified Android Engineer, Who provides solutions based on advanced CS knowledge.",
  paragraphTwo:
    'I hold over 4 years of experience leveraging Kotlin & Java to produce robust, well-architected apps.',
  paragraphThree: "I'm cool",
  resume:
    'https://docs.google.com/document/d/1dYz6rQE1pt0ZE_PJTJcXhLk5csBxU2djVBIKW-41jE4/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'homoola.png',
    title: 'Homoola Captain',
    info: 'Homoola is a state of the art transportation platform that provides its clients',
    info2: 'with the perfect solution for all their land transportation needs in one place.',
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
    info: '',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=org.syfpal.application',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ya_msahel.png',
    title: 'Ya Msahel',
    info: '',
    info2: '',
    url: 'www.google.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movies_app.png',
    title: 'Popular Movies',
    info: '',
    info2: '',
    url: 'www.google.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'murad_chat.png',
    title: 'Murad Chat',
    info: '',
    info2: '',
    url: 'www.google.com',
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
      name: 'instagram',
      url: 'https://www.instagram.com/abed__murad/',
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
