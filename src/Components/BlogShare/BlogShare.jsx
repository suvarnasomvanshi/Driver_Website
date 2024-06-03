import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import link_blue from "../../assets/icon/link_blue.svg";
import linkedin_blue from "../../assets/icon/linkedin_blue.svg";
import twitter_blue from "../../assets/icon/twitter_blue.svg";

const BlogShare = ({
  url,
  title,
  twitter,
  linkedin,
  fbIcon,
  copyIcon,
  handleCopy,
  className,
}) => {
  return (
    <div className={`${className && className}`}>
      <FacebookShareButton url={url} quote={title}>
        <button type="button" className="mr-5">
          <img src={fbIcon} alt="" />
        </button>
      </FacebookShareButton>
      <TwitterShareButton url={url} quote={title}>
        <button type="button" className="mr-5">
          <img src={twitter} alt="" />
        </button>
      </TwitterShareButton>
      <LinkedinShareButton url={url} quote={title}>
        <button type="button" className="mr-5">
          <img src={linkedin} alt="" />
        </button>
      </LinkedinShareButton>
      <CopyToClipboard text={url} onCopy={handleCopy()}>
        <button type="button" className="mr-5">
          <img src={copyIcon} alt="" />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default BlogShare;
