import React from "react";
import trainingStyles from './training.module.css';
import trainingData from '../../Data/training.json';

console.log(trainingData);

const Training = () => {
  return (
    <div>
      <h1>Training</h1>
      <table className={trainingStyles.training}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {trainingData.training.map((training, index) => (
            <tr key={index}>
              <td>{training.day}</td>
              <td>{training.time}</td>
              <td>{training.location}</td>
              <td>{training.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Training;