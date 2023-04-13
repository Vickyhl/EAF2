import React from "react";
import "../components/legEx.css";

function LegsEx() {
  return (
    <div>
      <h1>Legs exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seated knee strikes on the machine</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Free squat</td>
            <td>4X8</td>
          </tr>
          <tr>
            <td>Machine leg press</td>
            <td>4X15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LegsEx;
