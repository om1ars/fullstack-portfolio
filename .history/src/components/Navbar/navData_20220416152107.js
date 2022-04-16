import {FaTelegramPlane, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
export const navLinks = [
  {
    label: 'Projects',
    pathname: '/',
    hash: '#project-1',
  },
  {
    label: 'Details',
    pathname: '/details',
    hash: '#project-1',
  },
  {
    label: 'Skills',
    pathname: '/skills',
  },
  // { 
  //   label: 'Articles',
  //   pathname: '/articles',
  // },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [

  {
    label: 'Telegram',
    url: 'https://t.me/omar_shtern',
    icon: <FaTelegramPlane />,
  },
  {
    label: 'Github',
    url: 'https://github.com/omarshtern',
    icon: <FaGithub />,
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/omar-shtern-613001222/',
    icon: <FaLinkedin />,
  },

  {
    label: 'Mail',
    url: 'mailto:forfirebasejs2@gmail.com',
    icon: <AiOutlineMail />,
  },
];
