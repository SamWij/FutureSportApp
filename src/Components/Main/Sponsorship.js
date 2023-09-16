
import React from "react";
import sponsorStyles from './sponsorship.module.css';
import Gallery from '../PhotoGallery/PhotoGallery';


const Sponsorship = () => {
  const sponsorContent = {
    title1: "Sponsorship Packages",
    content1: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact al form, accompanied by English versions from the 1914 translation by H. Rackham.",
    title2: "Our Reach",
    content2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact al form, accompanied by English versions from the 1914 translation by H. Rackham."
  }

  return (
    <section className={sponsorStyles.container}>
      <div className={sponsorStyles.leftColumn}>
        <h2>{sponsorContent.title1}</h2>
        <p>{sponsorContent.content1} </p>
        <h2>{sponsorContent.title2}</h2>
        <p>{sponsorContent.content2}</p>

      </div>
      <div className={sponsorStyles.rightColumn}>
        <Gallery />
      </div>
    </section>
  )
};

export default Sponsorship;