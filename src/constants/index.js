import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
   {
    title: 'Backend Development',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  {
    title: 'Software Prototyping',
    icon: prototyping,
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
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Software engineer (Intern)',
    company_name: 'paritie',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2022 - july 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Hijaz consult',
    icon: kelhel,
    iconBg: '#333333',
    date: 'sept 2022 - Nov 2022',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Halalrideng.com',
    icon: microverse,
    iconBg: '#333333',
    date: 'jan 2023 - March 2023',
  },
 
  {
    title: 'Full Stack Developer',
    company_name: 'Hijaz consult',
    icon: dcc,
    iconBg: '#333333',
    date: 'April 2023 - june 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'FlexBean',
    description: 'A game for learning flexBox.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/moonDev0/flexbean',
    demo: 'https://flexbean.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Taxi app',
    description:
      'A ride hailing app.',
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
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/moonDev0/halalride',
    demo: 'https://play.google.com/store/apps/details?id=com.halalr.halalride',
  },
  {
    id: 'project-3',
    name: 'food cart',
    description: 'Tgrocery shopping site',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/moonDev0/foodcart-',
    demo: 'https://flexbean.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'SME APP',
    description: `A typescript application that allows users to pay bills and vouchers`,
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/moondev0/vtu',
    demo: 'https://github.com/moondev0/vtu',
  },
  {
    id: 'project-5',
    name: 'DASHBOARD',
    description:
      'This is a demo user/Admin Dashboard.',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/dashboard',
    demo: 'https://github.com/dashboard',
  },
];

export { services, technologies, experiences, projects };
