
import React from "react";
import fixtureStyles from './fixture.module.css';
import fixtureData from '../../Data/fixture.json';

console.log(fixtureData);

const Fixture = () => {
  return (
    <div>
      <h1>Fixture List</h1>
      <table className={fixtureStyles.fixture}>
        <thead>
          <tr>
            <th>Round</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {fixtureData.fixture.map((fixture, index) => (
            <tr key={index}>
              <td className={fixtureStyles.round}>{fixture.round}</td>
              <td className={fixtureStyles.title}>{fixture.title}</td>
              <td>{fixture.location}</td>
              <td>{fixture.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fixture;