import React from "react";
import "./legEx.css";

function ChestExMenBeg() {
  return (
    <div className="exTable">
      <h1>Chest exercise</h1>
      <table>
        <thead>
          <tr>
            <th>The exercise</th>
            <th>sets and repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lying chest press in an upper incline with a bar</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Lying chest press on an upper incline with dumbbells</td>
            <td>4X15</td>
          </tr>
          <tr>
            <td>Lying chest press with a bar</td>
            <td>4X8</td>
          </tr>
          <tr>
            <td>Butterfly in poly with cables</td>
            <td>4X15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChestExMenBeg;
