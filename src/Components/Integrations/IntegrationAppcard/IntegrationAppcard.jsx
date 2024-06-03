import "../../../styles/intappcard.css";
import "../../../styles/intlogo.css";

import { IntegrationLogo } from "../IntegrationLogo/IntegrationLogo";
import React from "react";
import { img_url } from "../../../utils/utils";

export const IntegrationAppcard = ({ data }) => {
  console.log(img_url + data.logo);
  const {logo} = data;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="integration-app-card mr-[21px] mb-[21px]" style={{maxWidth:'312px'}}>
      <div className={`integration-logo`}>
        <img className="h-[48px]" alt="" src={img_url + logo} />
      </div>
      <div className="frame">
        <div className="div"
        style={{
          //styleName: Sub-Header 2;
          fontFamily: 'Helvetica Neue-Medium',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '0.02em',
          textAlign: 'left',
        }}
        >
          {data?.title}
        </div>
        <div className="manage-your-payments">
          <p className="md:text-[16px] text-[14px] text-[#6D747A]">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
