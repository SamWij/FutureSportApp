
import React from "react";
import feeData from '../../Data/fees.json';
import feesStyles from './fees.module.css';

console.log(feeData);

const Fee = () => {
  return (
    <section className={feesStyles.container}>
      <h1>Fees</h1>
      <div className={feesStyles.leftColumn}>
        <table className={feesStyles.fees}>
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Indicative Cost</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {feeData.fees.map((fees, index) => (
              <tr key={index}>
                <td>{fees.type}</td>
                <td>{fees.cost}</td>
                <td>{fees.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={feesStyles.rightColumn}>
        <iframe src="https://www.youtube.com/embed/3zkumKSIEhA" title="Sam Kerr Backflip"></iframe>
      </div>
    </section >

  );
};

export default Fee;