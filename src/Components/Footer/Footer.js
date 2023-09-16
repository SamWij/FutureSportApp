import React from 'react';
import instagram from '../../Assets/squareInstagram.svg'
import facebook from '../../Assets/squareFacebook.svg'
import footerStyles from './footer.module.css'

const Footer = () => {

  const copyRight = {
    title: 'FutureSport | Football is Life 2023',
  };

  const socials = {
    instagramIcon: instagram,
    facebookIcon: facebook
  }


  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socials}>
        <ul className={footerStyles.socialLinks}>
          <li>  <a href="/"><img src={socials.instagramIcon} className={footerStyles.fa} alt="Instagram" /> </a></li>
          <li>  <a href="/"><img src={socials.facebookIcon} className={footerStyles.fa} alt="Facebook" /> </a></li>
        </ul>
      </div>
      <div className={footerStyles.tc} >
        <a href="#">Terms and Conditions</a>
      </div>
      <div>
        <p> &copy; {copyRight.title} </p>
      </div>
    </footer>
  );
};

export default Footer;
