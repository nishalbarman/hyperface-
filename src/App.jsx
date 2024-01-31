import { useEffect, useState } from "react";
import demoUserPicture from "./assets/demo_user.webp";
import discordIcon from "./assets/discord.svg";
import jsonData from "./sampleData/data.json";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState(jsonData);

  const navigator = useNavigate();

  return (
    <>
      <div className="container">
        {/* user details section  */}
        <div className="user-section">
          <div>
            <h3 className="user-name">
              Hey <span>{backendData?.user?.name || "Unkown"}</span> 👋
            </h3>
            <p className="">It’s a nice day to learn something new</p>
          </div>
          <div className="profile-picture-wrapper">
            <img src={backendData?.user?.profilePic || demoUserPicture} />
          </div>
        </div>

        {/* search section  */}
        <div className="search-wrapper">
          <span>Join and help us in building Airvoice!</span>
          <button className="community-button">
            <img
              src={discordIcon}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            Community
          </button>
        </div>

        {/* courses section  */}
        <div className="courses-section">
          <h3 className="course-section-title">Courses for you</h3>
          <p className="courses-section-subtitle">
            Listen to byte-sized audio courses from top thinkers
          </p>
          <div className="courses-products">
            {backendData?.courses?.map(
              ({ title, bgColor, imageUrl, totalChapters, duration }) => {
                return (
                  <div
                    className="course-item-wrapper"
                    onClick={() => {
                      navigator("/play");
                    }}>
                    <div
                      className="course-image"
                      style={{
                        background: bgColor,
                      }}></div>
                    <div className="course-body">
                      <h4 className="course-title">{title}</h4>
                      <p className="course-subtitle">
                        <span>
                          {totalChapters}{" "}
                          {parseInt(totalChapters) > 1 ? "Chapters" : "Chapter"}
                        </span>{" "}
                        • <span>{duration}</span>
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* articale section */}
        <div className="courses-section">
          <h3 className="course-section-title">Article Reads</h3>
          <p className="courses-section-subtitle">
            Listen to audio version of top web articles
          </p>
          <div className="courses-products">
            {backendData?.artical?.map(
              ({ title, bgColor, imageUrl, totalChapters, duration }) => {
                return (
                  <div
                    className="course-item-wrapper"
                    onClick={() => {
                      navigator("/play");
                    }}>
                    <div
                      className="course-image"
                      style={{
                        background: bgColor,
                      }}></div>
                    <div className="course-body">
                      <h4 className="course-title">{title}</h4>
                      <p className="course-subtitle">
                        <span>
                          {totalChapters}{" "}
                          {parseInt(totalChapters) > 1 ? "Chapters" : "Chapter"}
                        </span>{" "}
                        • <span>{duration}</span>
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
