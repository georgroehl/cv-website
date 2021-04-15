import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by Saad Pasta, modified by Georg Röhl.
        </p>
      </div>
    </Fade>
  );
}
