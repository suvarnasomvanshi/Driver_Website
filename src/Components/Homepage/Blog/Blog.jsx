import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Blogstyle.css";

export const Blog = ({
  property1,
  className,
  arrowRight = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right.svg",
  arrowRightClassName,
}) => {
  return (
    <div className={`blog ${className}`}>
      <div className="pexels-thirdman-wrapper">
      <img id="shareimg" alt="s" src="../assets/Share.svg" />
        <img
          className={`pexels-thirdman property-1-9-${property1}`}
          alt="Pexels thirdman"
          src={
            property1 === "variant-2"
              ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-vidal-balielo-jr-1250655-1.png"
              : property1 === "variant-3"
              ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-ketut-subiyanto-4546132-1@2x.png"
              : property1 === "variant-4"
              ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-edward-jenner-4033148-1.png"
              : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-thirdman-5327584-1@2x.png"
          }
        />
      </div>
      <div className="frame-21">
        <div className="frame-22">
          <div className="revolutionising">
            {property1 === "default" && (
              <p className="text-wrapper-24">Revolutionising Healthcare: The Power of Custom Software Solutions</p>
            )}

            {property1 === "variant-2" && (
              <p className="text-wrapper-24">
                Interoperability in Healthcare: Bridging the Gap with Innovative Software
              </p>
            )}

            {property1 === "variant-3" && (
              <p className="text-wrapper-24">
                Enhancing Patient Engagement: How Suvarna&#39;s Solutions Empower
              </p>
            )}

            {property1 === "variant-4" && (
              <p className="text-wrapper-24">
                Navigating Regulatory Compliance: A Guide to Healthcare Software Solutions
              </p>
            )}
          </div>
          <div className="frame-23">
            <div className="div-5">Aug 30</div>
            <div className="ellipse-7" />
            <div className="div-5">
              {property1 === "default" && <>News &amp; Trends</>}

              {property1 === "variant-2" && <>Technology</>}

              {property1 === "variant-3" && <>Research</>}

              {property1 === "variant-4" && <>Legal &amp; Regulatory</>}
            </div>
          </div>
        </div>
        <div className="frame-24">
          <div className="text-wrapper-5">Read more</div>
          <img className={`arrow-right-2 ${arrowRightClassName}`} alt="Arrow right" src={arrowRight} />
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  arrowRight: PropTypes.string,
};
