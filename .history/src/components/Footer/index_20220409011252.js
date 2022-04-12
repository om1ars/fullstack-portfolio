import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Omar Nurilloev.`}
    </span>
    <Link secondary className="footer__link" b href="https://www.linkedin.com/in/omar-shtern-613001222/" target="_self">
      Crafted by yours truly
    </Link>
  </footer>
);

export default Footer;
