import React from 'react';
import headerStyles from './header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div class={headerStyles.row}>
        <div class={headerStyles.column}>
          <div class={headerStyles.joinCta}>
            <h1 class={headerStyles.heroTitle}>Start Playing Football Today!</h1>
            <p class={headerStyles.ctaText}>Join FutureSport and become a part of the Soccer community.</p>
            <div class={headerStyles.join} ><a href="/join"><button class={headerStyles.joinBtn}>Join!</button></a></div>
          </div>
        </div>
        <div class={headerStyles.column} id="video">
          <iframe src="https://www.youtube.com/embed/3zkumKSIEhA" title="Sam Kerr Backflip"></iframe>
        </div>
      </div>
    </header>
  );
};

export default Header;
