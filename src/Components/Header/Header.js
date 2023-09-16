import React from 'react';
import headerStyles from './header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.row}>
        <div className={headerStyles.column}>
          <div className={headerStyles.joinCta}>
            <h1 className={headerStyles.heroTitle}>Start Playing Football Today!</h1>
            <p className={headerStyles.ctaText}>Join FutureSport and become a part of the Soccer community.</p>
            <div className={headerStyles.join} ><a href="/join"><button className={headerStyles.joinBtn}>Join!</button></a></div>
          </div>
        </div>
        <div className={headerStyles.column} id="video">
          <iframe src="https://www.youtube.com/embed/3zkumKSIEhA" title="Sam Kerr Backflip" alt="video-frame"></iframe>
        </div>
      </div>
    </header>
  );
};

export default Header;
