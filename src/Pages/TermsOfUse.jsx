import "../styles/TermsOfUse.css";

import React, { useEffect } from "react";

import { Footer } from "../Components/Footer";
import SmallBlueWave from "../Components/SmallBlueWave";

// import "./style.css";





export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <div className="termsOfUse h-auto flex-col justify-start items-center">
      {/*  vectors + heading */}

      <SmallBlueWave heading="Terms of Use" subheading="" />

      <div className="md:h-[2950px] h-auto w-screen flex flex-col justify-center items-center">
        <div className="lg:w-10/12 md:w-11/12 w-full md:px-0 px-2">
          <div className="sub-header">Terms of Use</div>
          <div className="last-updated-text my-2">
            Last updated: 12 October, 2023
          </div>
          <div className="regular-text my-3">
            <div>
              Welcome to Suvarna Technosoft Pvt. Ltd. ("the Website"). By
              accessing and using this Website, you agree to comply with and be
              bound by the following terms and conditions. Please read these
              terms carefully before using the Website. This Privacy Policy (the
              “Privacy Policy”) is intended to inform you about our practices
              regarding the collection and use of your data that you may submit
              to us through our Services. This Privacy Policy should be read
              alongside, and in addition to the Terms of Use. Unless otherwise
              defined in this Privacy Policy, terms used have the same meaning
              as in the Terms of Use.
            </div>
            <div className="mt-16">
              Unless otherwise defined in this Privacy Policy, terms used have
              the same meaning as in the Terms of Use. This Privacy Policy may
              be updated to reflect changes in legislation, so please review it
              now and then. You can always find the most recent version on our
              Site.
            </div>
          </div>

          {/*  table list */}
          <div className="my-16">
            <div className="sub-header">Table of Contents</div>

            <ol className="my-4 pl-10" type="1">
              <li className="my-4 table-of-content-text">
                {" "}
                <a href="#acceptanceofterms" style={{fontFamily:'Helvetica Neue-Medium'}}>Acceptance of Terms</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#useofcontent" style={{fontFamily:'Helvetica Neue-Medium'}}>Use of Content</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#usercontribution" style={{fontFamily:'Helvetica Neue-Medium'}}>User Contributions</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#thirdpartylinks" style={{fontFamily:'Helvetica Neue-Medium'}}>Third-party Links</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#disclaimerofwarranties" style={{fontFamily:'Helvetica Neue-Medium'}}>Disclaimer of warranties</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#limitationofliability" style={{fontFamily:'Helvetica Neue-Medium'}}>Limitation of liability</a>
              </li>
              <li className="my-4 table-of-content-text">
                {" "}
                <a href="#changetoterms" style={{fontFamily:'Helvetica Neue-Medium'}}>Changes to Terms</a>
              </li>
              <li className="my-4 table-of-content-text">
                <a href="#governinglaw" style={{fontFamily:'Helvetica Neue-Medium'}}>Governing Law</a>
              </li>
            </ol>
          </div>
          {/*  point -1 */}
          <div className="my-16" id="acceptanceofterms">
            <div className="sub-header pl-[10px]">1. Acceptance of Terms</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              By accessing or using ESGBites, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions, as well as our Privacy Policy. Your use of the Website
              constitutes your acceptance of these terms in full. If you do not
              agree with any of these terms, please do not use the Website.
            </div>
          </div>
          {/* 2 point  */}
          <div className="my-16" id="useofcontent">
            <div className="sub-header pl-[10px]">2. Use of Content</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              <div className="my-4">
                <div className="sub-header-2 mb-2">2.1 Content Disclaimer</div>
                <div className="regular-text">
                The content provided on ESGBites is for informational purposes
                only. It is not intended as professional advice and should not
                be relied upon as such. While we strive to provide accurate and
                up-to-date information, we do not endorse or guarantee the
                accuracy, completeness, or reliability of any information
                presented on the Website. The content on ESGBites should not be
                seen as a substitute for seeking professional advice in specific
                situations.
                </div>
              </div>
              <div className="my-4">
                <div className="sub-header-2 mb-2">2.2 Copyright</div>
                <div className="regular-text">
                All content published on ESGBites, including articles, images,
                graphics, videos, and multimedia materials, is protected by
                copyright laws. All rights are reserved unless otherwise stated.
                You may not reproduce, distribute, modify, or republish any
                content from the Website without obtaining prior written consent
                from ESGBites or the respective copyright holders. If you wish
                to use any content for non-commercial purposes, you must provide
                proper attribution to ESGBites.
                </div>
              </div>
            </div>
          </div>
          {/*  3rd point */}
          <div className="my-16" id="usercontribution">
            <div className="sub-header pl-[10px]">3. User Contributions</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              <div className="my-4">
                <div className="sub-header-2 mb-2">
                  3.1 User Generated Content
                </div>
                The content provided on ESGBites is for informational purposes
                only. It is not intended as professional advice and should not
                be relied upon as such. While we strive to provide accurate and
                up-to-date information, we do not endorse or guarantee the
                accuracy, completeness, or reliability of any information
                presented on the Website. The content on ESGBites should not be
                seen as a substitute for seeking professional advice in specific
                situations.
              </div>
              <div className="my-4">
                <div className="sub-header-2 mb-2">3.2 Responsibility</div>
                All content published on ESGBites, including articles, images,
                graphics, videos, and multimedia materials, is protected by
                copyright laws. All rights are reserved unless otherwise stated.
                You may not reproduce, distribute, modify, or republish any
                content from the Website without obtaining prior written consent
                from ESGBites or the respective copyright holders. If you wish
                to use any content for non-commercial purposes, you must provide
                proper attribution to ESGBites.
              </div>
            </div>
          </div>
          {/*  4th point */}
          <div className="my-16" id="thirdpartylinks">
            <div className="sub-header pl-[10px]">4. Third-party Links</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              ESGBites may include links to third-party websites, events, or
              resources for informational purposes. These links do not imply
              endorsement or responsibility for the content, products, or
              services offered by third parties. Users access third-party
              websites at their own risk. We recommend that you review the terms
              and privacy policies of any third-party websites you visit through
              links on ESGBites.
            </div>
          </div>
          {/*  5th point */}
          <div className="my-16" id="disclaimerofwarranties">
            <div className="sub-header pl-[10px]">5. Disclaimer of Warranties</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              ESGBites provides the Website on an "as is" and "as available"
              basis. While we strive to maintain the functionality and
              availability of the Website, we do not provide any warranty or
              guarantee regarding the availability, accuracy, timeliness, or
              performance of the Website. Your use of the Website is at your own
              risk. We disclaim all warranties, whether express or implied,
              including but not limited to the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </div>
          </div>
          {/*  6th point */}
          <div className="my-16" id="limitationofliability">
            <div className="sub-header pl-[10px]">6. Limitation of Liability</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              To the fullest extent permitted by applicable law, ESGBites and
              its affiliates, directors, officers, employees, and agents shall
              not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your use of the Website or any
              content therein. This includes, but is not limited to, damages for
              loss of profits, data, goodwill, or other intangible losses. This
              limitation of liability applies even if ESGBites has been advised
              of the possibility of such damages.
            </div>
          </div>
          {/*  7th point */}
          <div className="my-16" id="changetoterms">
            <div className="sub-header pl-[10px]">7. Changes to Terms</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              ESGBites reserves the right to modify these terms and conditions
              at any time without prior notice. It is your responsibility to
              review these terms periodically to stay informed of any updates.
              Continued use of the Website after changes have been made implies
              your acceptance of the modified terms. If you do not agree to the
              modified terms, you should discontinue using the Website.
            </div>
          </div>
          {/*  8th point */}
          <div className="my-16" id="governinglaw">
            <div className="sub-header pl-[10px]">8. Governing Law</div>
            <div className="w-full h-[1px] bg-[#DCDFE0] my-2"></div>
            <div className="regular-text my-3">
              These terms and conditions are governed by and construed in
              accordance with the laws of California. Any disputes arising out
              of or related to these terms shall be subject to the exclusive
              jurisdiction of the courts of California. Any claims arising from
              the use of the Website must be brought within 2 months after the
              cause of action arises or be forever barred.
            </div>
          </div>
        </div>
      </div>

      {/*  same for every page  */}
      {/* <Footer className="" /> */}
    </div>
  );
};
