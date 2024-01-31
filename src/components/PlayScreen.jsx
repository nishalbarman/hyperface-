import React from "react";
import DownArrow from "../assets/down-arrow.svg";
import shareIcon from "../assets/share-icon.svg";
import RightSkip from "../assets/left.svg";
import LeftSkip from "../assets/right.svg";
import Left10Sec from "../assets/left-10sec.svg";
import Right10Sec from "../assets/right_10sec.svg";
import PlayPause from "../assets/play_pause.svg";
import "../App.css";

function PlayScreen() {
  return (
    <div className="container">
      <div className="top_header">
        <img src={DownArrow} />
        <img src={shareIcon} />
      </div>
      <div className="middleImage">
        <img src="https://s3-alpha-sig.figma.com/img/1318/651f/9a76a9ec22e1dfcce18b456964d9497c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W4u--kMgBvd-ge5pT3IXlfuMZZ4lMRdsIf7mChB~5knVafeTDJVYB5A6zUHulcPG4NUK3ULmJxiP66jNH1RLx-hwckpCyRE3u7KdD7G1kKFiuersSVn9C3BbMiuD8apUbx9fcikzHuQ5IAKiIHFoqyd1I60IcsLX6vmZLWctdPbPb0EQRH9CqRsy5cbPxGrxVYohdMnLpvxIcK5q0Q6cYFdGyPvpsNcJpkw0j7Ih2bt7aI4~DvKthQZpRQp7m29FzysWxmQEItqXt9k9JckWxgDrL6ZYod92dlwgQC6QHj1dZh-RAJhhGGhRDQ2Ems9JQa9JdgFJAl6Hafty-aSpwg__" />
      </div>
      <div className="course-detals">
        <h1 className="course-title">Fundamentals of Product Design</h1>
        <p className="course-subtitle">Chapter 2 - What is Product Design?</p>
      </div>
      <div className="buttons-wrapper">
        <button className="chapter-buttons">View Chapter Notes</button>
        <button className="chapter-buttons">Attempt Quize</button>
      </div>
      <div className="prgress-bar">
        <div className="bar-style">
          <div className="blue-dot"></div>
        </div>
        <div className="times">
          <span>00:56</span>
          <span>10:16</span>
        </div>
      </div>

      <div className="controll-buttons">
        <img src={LeftSkip} />
        <img src={Left10Sec} />
        <img src={PlayPause} />
        <img src={Right10Sec} />
        <img src={RightSkip} />
      </div>
    </div>
  );
}

export default PlayScreen;
