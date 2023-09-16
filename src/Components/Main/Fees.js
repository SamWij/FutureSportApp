
import React from "react";
import trainingData from '../../Data/fees.json';
import feesStyles from './fees.module.css'

const Fees = () => (
  <section className={feesStyles.container}>
    <div className={feesStyles.leftColumn}>
    </div>
    <div className={feesStyles.rightColumn}>
      <iframe src="https://www.youtube.com/embed/3zkumKSIEhA" title="Sam Kerr Backflip"></iframe>
    </div>


  </section>
);

export default Fees;