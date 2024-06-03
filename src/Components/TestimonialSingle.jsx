import PropTypes from "prop-types";
import React from "react";
import "../styles/Testimonialstyle.css";

export const TestimonialSingle = ({
  className,
  frame = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/frame-482390-4.svg",
  text = "Dr. B Sarita Rao",
  text1 = "Bengaluru, IN",
  maskGroup = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-2@2x.png",
  line = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3.svg",
  text2 = "We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction. We are happy to have a partner like Suvarna Technosoft for our healthcare software requirements.",
}) => {
  return (
    <div className={`testimonial-single lg:scale-100 scale-75 ${className}`}>
      <div className="overlap-2">
        <div className="overlap-group-3">
          <div className="div-wrapper">
            <div className="frame-17">
              <img className="line" alt="Line" src={line} />
              <div className="frame-18">
                <img className="frame-19" alt="Frame" src={frame} />
                <p className="we-were-confident">{text2}</p>
              </div>
            </div>
          </div>
          <div className="frame-20"
          style={{
            background: 'linear-gradient(90.95deg, #357244 8.41%, #7EAF79 78.88%)',
          }}
          >
            <div className="dr-b-sarita-rao">{text}</div>
            <div className="bengaluru-IN">{text1}</div>
          </div>
          <img className="mask-group rounded-full" alt="Mask group" src={maskGroup} style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
        </div>
        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-4.svg"
        />
      </div>
    </div>
  );
};

TestimonialSingle.propTypes = {
  frame: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  maskGroup: PropTypes.string,
  line: PropTypes.string,
  text2: PropTypes.string,
};
