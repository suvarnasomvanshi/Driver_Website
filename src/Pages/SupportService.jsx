import React, { useState } from "react";
import SupportPopUp from "../Components/SupportPopUp/SupportPopUp";
import Banner from "../Components/SupportService/Banner";
import Card from "../Components/SupportService/SupportCard";
import callIcon from "../assets/Modified_icons/call_icon.svg";
import chatIcon from "../assets/Modified_icons/chat_icon.svg";
import mailIcon from "../assets/Modified_icons/mail_icon.svg";
import supportIcon from "../assets/Modified_icons/support_icon.svg";
import { useGetSupportQuery } from "../redux/features/client/clientApi";

const SupportService = () => {
  const [isSupportVisible, setIsSupportVisible] = useState(false);
  const { data, loading, error } = useGetSupportQuery();
  // support data
  
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (loading || !data) {
    return <div>Loading</div>;
  }
  console.log(data);
  return (
    <div id="support">
      {/* banner here*/}
      <Banner />
      {/* banner close here*/}
      {/* support card here */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 my-4 sm:my-8 lg:my-12">
        {console.log(data)}
        {data?.map((item, index) => (
          <Card
            key={index}
            item={item}
            setIsSupportVisible={setIsSupportVisible}
          />
        ))}
      </div>
      {/* support card close here */}
      {isSupportVisible ? (
        <SupportPopUp
          setIsSupportVisible={setIsSupportVisible}
          isSupportVisible={isSupportVisible}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SupportService;
