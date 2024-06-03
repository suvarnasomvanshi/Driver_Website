import React from 'react';

const HimsBenifits = () => {
  return (
      <div className="w-full flex-grow-1 flex flex-col justify-evenly items-center mb-[120px]">
        <div className="flex lg:w-10/12 md:w-11/12 w-full md:px-0 px-2 flex-col items-center relative flex-[0_0_auto]">
          <div className="relative mt-[-1.00px]  font-medium text-variable-collection-brand-blue lg:text-[48px] md:text-[40px] text-[32px] tracking-[0.96px] leading-[72px] mb-[24px] text-[#146DFA]">
            World class care, anywhere.
          </div>
          <p className="relative md-px-4 font-normal text-[#3C4043] lg:text-[24px] md:text-[24px] text-[16px] text-center mb-[64px] w-[872px] mx-auto"
          style={{
            fontFamily: 'Noto Sans',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '36px',
            letterSpacing: '0.01em',
            textAlign: 'center',
          }}
          >
            Streamline operations, enhance patient care and transform patient
            engagement with Suvarna HIMS. Streamline operations, enhance patient  
            care and transform patient engagement with Suvarna HIMS.
          </p>
        </div>
        <div className="flex lg:w-10/12 md:w-11/12 w-full md:h-2/3 h-auto md:items-start md:justify-between justify-center items-center relative flex-[0_0_auto] flex-wrap ">
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
            <img src="../assets/archive.svg" alt="" />
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap"
              style={{
                fontFamily:'Helvetica Neue-Medium'
              }}
              >
                Reach more patients
              </div>
              <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]"
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
                Virtual visits transform the way patients and providers
                communicate. Telehealth is a breakthrough health option that
                advances convenient access.
              </p>
            </div>
          </div>
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
            <img src="../assets/heart.svg" alt="" />
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap"
              style={{
                fontFamily:'Helvetica Neue-Medium'
              }}
              >
                Improve health outcomes
              </div>
              <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]"
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
                Virtual visits transform the way patients and providers
                communicate. Telehealth is a breakthrough health option that
                advances convenient access, efficiency, and satisfaction across
                the entire care continuum.
              </p>
            </div>
          </div>
          <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
            <img src="../assets/activity.svg" alt="" />
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap"
              style={{
                fontFamily:'Helvetica Neue-Medium'
              }}
              >
                Convenient Access
              </div>
              <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]"
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
                Virtual visits transform the way patients and providers
                communicate. Telehealth is a breakthrough health option that
                advances convenient access.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HimsBenifits;