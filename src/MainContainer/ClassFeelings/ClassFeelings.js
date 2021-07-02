import React from "react";
import PropTypes from "prop-types";
import happyFace from "../../img/happy_face.svg";
import sadFace from "../../img/sad_face.svg";
import "./classFeelings-styles.css";

export default function classFeelings(props) {
  // State temporal
  const { classVotes } = props;
  return (
    <>
      <div className="feelings-info">
        <span>Sentimientos de la clase</span>
        <span>{classVotes.voters} votos</span>
      </div>
      <div className="feelings-percentage">
        <div className="feelings-percentage__chart">
          <img src={happyFace} alt="happy-face" />
          <h1>{classVotes.likePercentage}%</h1>
        </div>
        <div className="feelings-percentage__chart">
          <img src={sadFace} alt="sad-face" />
          <h1>{classVotes.dislikePercentage}%</h1>
        </div>
      </div>
    </>
  );
}

classFeelings.propTypes = {
  classVotes: PropTypes.shape({
    totalVotes: PropTypes.number,
    like: PropTypes.number,
    dislike: PropTypes.number,
  }),
};
