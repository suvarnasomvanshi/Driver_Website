// import rhand from "../../assets/icon/rHand.png";
import rhand from "../../assets/products/HIMS/pointer.svg";

const KeyModules = ({keys}) => {
  const data = [
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
  ];
  return (
    <div className="relative bg-white box-border w-full overflow-hidden flex flex-col items-start justify-start px-[20px] pt-[72px] sm:px-[60px] pb-24 gap-[36px] text-center text-17xl border-[1px] border-solid border-[#ebedf0] max-w-[100%] md:max-w-[600px] lg:max-w-[1440px] m-auto">
      <b className="relative leading-[150%]"
      style={{
        //styleName: Header H1;
        fontFamily: 'Helvetica Neue-Bold',
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '54px',
        letterSpacing: '0em',
        textAlign: 'center',
        color:'#3C4043'
      }}
      >Key Modules</b>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 ">
{/* Conflict part */}
    {/* <div className="relative bg-white box-border w-full overflow-hidden flex flex-col items-start justify-start px-[20px] pt-[72px] sm:px-[60px] pb-24 gap-[36px] text-center text-17xl border-[1px] border-solid border-[#ebedf0] max-w-[100%] md:max-w-[600px] lg:max-w-[1440px]  m-auto ">
      <b className="relative leading-[150%]">Key Modules</b>
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-y-6 gap-x-6 "> */}
{/* here */}
        {keys.map((item, index) => (
          <div className="shrink-0 flex flex-row flex-wrap items-center justify-start gap-[24px] text-left text-[16px] font-['Noto Sans'] m-auto ">
            <div className="[background:linear-gradient(87.53deg,_rgba(57,_208,_94,_0.15)_15.79%,_rgba(70,_144,_199,_0.15))] box-border w-[90vw] sm:w-[324px] lg:w-[324px] xl:w-[394px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-4 gap-[12px] border-[1px] border-solid border-[#ebedf0]">
              <img
                className="relative w-4 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src={rhand}
              />
              <div className="flex-1 relative leading-[150%] inline-block h-12"
              style={{
                fontFamily: 'Noto Sans',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#3C4043'
              }}
              >
               {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyModules;
