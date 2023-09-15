
import React from "react";
import fixtureData from '../../Data/fixture.json';

console.log(fixtureData);

const Fixture = () => {
  return (
    <div>
      <h1>Fixture List</h1>
      <table>
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
              <td>{fixture.round}</td>
              <td>{fixture.title}</td>
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