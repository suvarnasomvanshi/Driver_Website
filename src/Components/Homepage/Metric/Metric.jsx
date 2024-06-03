import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Metricstyle.css";

export const Metric = ({ text = "60M+", text1 = "Patient Records", rectangleClassName }) => {
  return (
    <div className="metric">
      <div className="frame-16">
        <div className="element-m">{text}</div>
        <div className="patient-records">{text1}</div>
      </div>
      <div className={`rectangle-6 ${rectangleClassName}`} />
    </div>
  );
};

Metric.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
