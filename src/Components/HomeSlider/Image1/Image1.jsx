import { Link } from "react-router-dom";
import { img_url } from "../../../utils/utils";
const Image1 = ({ item,height,width }) => {
  const handleclick = (e) =>{
    alert("Clicked")
  }

  return (
    <div className="h-[540px] relative z-40 text-xl flex flex-col justify-center items-center mt-[100px]"
    style={{
      zIndex:'0'
    }}
    >
      {/* image to be chnaged */}
      <img
        // src={img_url + item.video}
        src={item.video}
        alt=""
        className=" w-screen object-cover"
        style={{
          overflow:'hidden'
        }}
      />
      <div
        className=" h-full w-screen z-10 text-xl flex flex-col sm:pt-16 pt-10 items-center absolute top-0 left-0"
        //  image to be chnaged

        style={{
          background:
            "linear-gradient(180deg, rgba(15, 134, 77, 0.60) 71.88%, rgba(70, 144, 199, 0.07) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px] font-helvetica font-sans"
          style={{
            fontFamily: 'Helvetica Neue-Bold',
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: "60px",
            letterSpacing: '0em',
            textAlign: 'center',
            transition: '1s ease-in-out',
            height: '100%',
            width: '100%',
            maxWidth: '727px',
            maxHeight: '60px'
            // 727,60
          }}>
          {item.title}
        </div>
        <div
          className={`w-1/2 text-center text-white md:text-[20px] text-[16px]  font-helvetica font-sans ${
            height < 770 && width < 1370 ? `mb-[62px]` : `mb-[102px]`
          }`}
            style={{
              //styleName: Sub-header SH2;
              // fontFamily: 'Helvetica Neue-Medium',
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30px",
              letterSpacing: "0.02em",
              textAlign: "center",
            height: '100%',
            width: '100%',
            maxWidth: '827px',
            maxHeight: '60px'
            }}
        >
          {item.subtitle}
        </div>
        <a
          href="#products"
          className="w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]"
          // onClick={handleclick}
          style={{
            zIndex:'99999'
          }}
        >
          EXPLORE PRODUCTS
        </a>
      </div>
    </div>
  );
};

export default Image1;