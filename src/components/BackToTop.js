import React from "react";
// import backtotopbtn from "../images/back-to-top.png";

const BackToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="back-to-top-btn"
      onClick={scrollToTop}
      id="scroll-to-top-btn"
    >
      <div className="back-to-top-content">
        {/* <img src={backtotopbtn} alt="back to top button" /> */}
        <i class="arrow-up"></i>
      </div>
    </div>
  );
};

export default BackToTopButton;