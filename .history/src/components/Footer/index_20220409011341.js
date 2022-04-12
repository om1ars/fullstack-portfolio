import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Omar Nurilloev.`}
    </span>
    <a ta className="footer__link"  href="https://www.linkedin.com/in/omar-shtern-613001222/" target="_self">
      Crafted by yours truly
    </a>
  </footer>
);

export default Footer;
