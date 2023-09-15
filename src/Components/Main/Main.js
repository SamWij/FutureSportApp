import React from 'react';
import mainStyles from './main.module.css'
import Gallery from '../PhotoGallery/PhotoGallery';

const Main = () => {

  const sectionContent = {
    title: 'Football title 1',
    content: "Victoria boasts a robust local soccer scene, with clubs spread across the state. From metropolitan Melbourne to regional towns, soccer pitches are alive with the sounds of cheering fans and the thud of the ball hitting the back of the net. The state's governing body, Football Victoria, plays a pivotal role in organizing competitions, fostering talent, and promoting the sport at all levels. One of the most remarkable aspects of local soccer in Victoria is its inclusivity.Clubs here often represent a microcosm of the diverse communities that call the state home.Players from various cultural backgrounds unite under a common love for the game, creating a rich tapestry of experiences.This diversity is celebrated through events such as cultural festivals and international tournaments, where different communities showcase their unique styles of play.",
  }

  return (
    <main className={mainStyles.main}>
      <section className={mainStyles.content}>
        <h1>{sectionContent.title}</h1>
        <p>{sectionContent.content}</p>
      </section>
      <section className={mainStyles.Gallery}>
        <Gallery />
      </section>
    </main>
  );
};

export default Main;
