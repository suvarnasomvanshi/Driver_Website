import PropTypes from "prop-types";
import React , {useState , useEffect} from "react";
import "../../../styles/Partnerstyle.css";
import { useGetHomeClientsQuery } from "../../../redux/features/home/homeApi";
import { img_url } from "../../../utils/utils";


export const Partners = ({ text = "Trusted by partners across the globe" }) => {
  const { data,isLoading,isError,isSuccess } = useGetHomeClientsQuery();
  
  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div className={`h-[250px] w-screen flex justify-center items-start`}>
      <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-center items-start">
        <div className="w-full  md:text-[28px] text-[30px] text-[#6D747A] font-medium mb-[64px] text-center"
        style={{
          //styleName: Header H3;
          fontFamily: 'Helvetica Neue-Medium',
          fontSize: '28px',
          fontWeight: 500,
          lineHeight: '42px',
          letterSpacing: '0em',
          textAlign: 'center'
        }}
        >
          {text}
        </div>
        <div className="w-full flex justify-evenly items-center">
          {
            data?.slice(0,6).map((item,index) => (
              <img key={index}
                className="md:w-[100.809px] w-[60px] md:h-[56px]"
                alt="partners_logo"
                src={img_url + item?.logo}
                style={{
                  cursor:'pointer'
                }}
              />
            ))
          }
        
          
        </div>
      </div>
    </div>
  );
};

Partners.propTypes = {
  text: PropTypes.string,
};
