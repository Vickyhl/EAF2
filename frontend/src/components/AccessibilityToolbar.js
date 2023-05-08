import React, { useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import "./css/AccessibilityToolbar.css";

const AccessibilityToolbar = () => {
  const {
    fontSize,
    setFontSize,
    greyscale,
    setGreyscale,
    contrast,
    setContrast,
  } = useContext(AccessibilityContext);

  const increaseFontSize = () => setFontSize(fontSize + 0.1);
  const decreaseFontSize = () => setFontSize(fontSize - 0.1);
  const toggleGreyscale = () => setGreyscale(!greyscale);
  const increaseContrast = () => setContrast(contrast + 0.1);
  const decreaseContrast = () => setContrast(contrast - 0.1);

  return (
    <div className="accessibility-toolbar">
      <h2 className="accessibility-toolbar__title">Accessibility Options</h2>
      <div className="accessibility-toolbar__options">
        <div className="accessibility-toolbar__option">
          <label htmlFor="font-size">Font size:</label>
          <select id="font-size">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="accessibility-toolbar__option">
          <label htmlFor="contrast">Contrast:</label>
          <select id="contrast">
            <option>Default</option>
            <option>High contrast</option>
            <option>Low contrast</option>
          </select>
        </div>
        <div className="accessibility-toolbar__option">
          <input type="checkbox" id="greyscale" />
          <label htmlFor="greyscale">Greyscale</label>
        </div>
      </div>
      <button className="accessibility-toolbar__button">Apply settings</button>
    </div>
  );
};

export default AccessibilityToolbar;
