import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <div className="left">
        <img src="/orbital.png" alt="" className="orbital" />
        <h1>Proxima AI </h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          vitae ullam corporis, culpa voluptas, reiciendis{" "}
        </h3>
        <Link to="/dashboard" className="animated-link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Started
        </Link>
      </div>
      <div className="right">
        <div className="imgcontainer">
          <div className="bgcontainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human1:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              style={{
                fontSize: "16px",
                color: "white",
                fontFamily: "monospace",
              }}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="logo.png" alt="" />
        <div className="links">
          <Link to="/" className="link1">Terms of Service</Link>
          <span>|</span>
          <Link to="/" className="link2">   Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
