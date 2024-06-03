import "../styles/BrochuresAndCollateral.css";

import { Document, Page } from "react-pdf";
import React, { useEffect, useState } from "react";

import PDF_icon from "../assets/brochures/pdf-icon.svg"
import SmallGreenWave from "../Components/SmallGreenWave";
import b_download from "../assets/brochures/blue-download.svg"
// import background from "../assets/images/image 127.png";
import background from "../assets/brochures/FramePDF.png";
import { img_url } from "../utils/utils";
import { pdfjs } from "react-pdf";
import { useGetAllBACQuery } from "../redux/features/BrochuresAndCollateral/BrochuresAndCol";
import w_download from "../assets/brochures/white-download.svg"

import JsFileDownloader from 'js-file-downloader'

// import pdf_bg from "../assets/brochures/container-image.svg"




// import PDF_icon from "../assets/pdf_icon.png";
// import img1 from "../assets/images/down-arrow1.png";
// import img2 from "../assets/images/down-arrow-2.png";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
export const BrochuresAndCollateral = () => {
  const { data: files } = useGetAllBACQuery();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [buttonHover, setButtonHover] = useState(false)
  const [cardId, setCardId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
    setNumPages(numPages);
  }

  // const files = [
  //   {
  //     id: 1,
  //     title: "Company Flyer",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 2,
  //     title: "HIMS Flyer",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 3,
  //     title: "SLIMS Flyer",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 4,
  //     title: "EMR Flyer",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 5,
  //     title: "RIS-PACS Flyer",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 6,
  //     title: "HIMS Brochures",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 7,
  //     title: "Drug Detail Brochures",
  //     total_pages: 12,
  //     image: "",
  //   },
  //   {
  //     id: 8,
  //     title: "EMR Brochures",
  //     total_pages: 12,
  //     image: "",
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
      const downloader = new JsFileDownloader({
        url,
        filename,
      });

      downloader.start()
        .then(() => {
          console.log('File downloaded');
          resolve();
        })
        .catch((error) => {
          console.error('Error downloading file:', error);
          reject(error);
        });
    });
  }

  const handleDownload = (url, filename) => {
    console.log(url,filename)
    downloadFile(url,`${filename}.pdf`)
      .then(() => {
        console.log('Download successful!');
      })
      .catch((error) => {
        console.error('Download failed:', error);
      });
  }

  const onButtonClick = (url) => {
    const pdfUrl = url;
    const link = document.createElement("a");
    link.href = pdfUrl;
    window.open(url, "_blank");
    link.download = "document.pdf"; // specify the filename

    link.click();
  };

  return (
    <div className=" BrochuresAndCollateral flex flex-col w-full gap-10 md:gap-14 lg:gap-28 ">
      {/*  vectors + heading */}

      <SmallGreenWave
        heading="Brochures & Collaterals"
        subheading="Find up-to-date information on our whole suite of products &
            services"
      />

      <div className=" container flex flex-col justify-start items-center ">
        <div className="w-full flex flex-wrap justify-around ">
          {files?.map((d, index) => {
            return (
              // card body
              <div
                key={index}
                className={"card "}
                // onMouseOver={() => {
                //   setIsMouseOver(true);
                //   setCardId(d.id);
                // }}
                // onMouseLeave={() => {
                //   setIsMouseOver(false);
                //   setCardId(0);
                // }}
                onMouseOver={() => {
                  setButtonHover(true);
                  setCardId(d.id);
                }}
                onMouseLeave={() => {
                  setButtonHover(false);
                  setCardId(0);
                }}
                style={{
                  // backgroundColor: (!buttonHover && isMouseOver && cardId === d.id) ? "#6D747A" : "",
                  transition: '0.1s linear'
                }}
              >
                <div className="relative flex justify-center items-center ">
                  {/* image of the document */}
                  <figure className={`p-1 `}>
                    <img src={background} alt="" />
                  </figure>
                  {/* Image of theh pdf icon */}
                  <img
                    src={PDF_icon}
                    alt="pdf_icon"
                    className="absolute z-10 bottom-0 left-0 pl-1"
                  />
                </div>

                {/* Name of the card - title */}
                <div className={`card_title mt-[16px]`}
                  style={{
                    //styleName: Sub-Header 4;
                    fontFamily: 'Helvetica',
                    fontSize: '16px',
                    fontWeight: '550',
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    color: '#3C4043',
                  }}
                >{d.discription}</div>
                {/* Number of pages inside card */}
                <div className={`mt-1 card_regular_text mb-[16px]`}
                  style={{
                    //styleName: Body Text B2;
                    fontFamily: 'Noto Sans',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '21px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: '#6D747A',
                  }}
                >
                  {numPages&&numPages} Pages
                  <div className="hidden">
                    <div>
                      <Document
                        // file={`${img_url}${d?.brochure_collateral_file}`}
                        file={`${d?.brochure_collateral_file}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        {/* <Page
                          height={"20"}
                          pageNumber={pageNumber}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        /> */}
                      </Document>
                      <p>
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  // href={`${img_url}${d?.brochure_collateral_file}`}
                  // download="downloaded-file-name.pdf" // Set the desired file name
                  // download={`${img_url}${d?.brochure_collateral_file}`}
                  // target="_blank" // Open in a new tab or window
                  rel="noopener noreferrer" // Recommended for security
                  onClick={(e) => {
                    // handleDownload(`${img_url}${d?.brochure_collateral_file}`, d?.discription);
                    handleDownload(`${d?.brochure_collateral_file}`, d?.discription);
                  }}
                >
                  {/* button for download */}
                  <button
                    type="button"
                    className={` card-light-button button-text cursor-pointer flex gap-2 items-center  ${buttonHover && cardId === d.id && "bg-blue-600 text-white"
                      } `}
                    style={{
                      color: (buttonHover && cardId === d.id) ? "#FFFFFF" : "#146DFA"
                    }}
                    onMouseOver={() => {
                      setButtonHover(true);
                      setCardId(d.id);
                    }}
                    onMouseLeave={() => {
                      setButtonHover(false);
                      setCardId(0);
                    }}
                  >
                    <div className="mx-0.5">Download</div>
                    {buttonHover && cardId === d.id ? (
                      <img src={w_download} alt="" />
                    ) : (
                      <img src={b_download} alt="" />
                    )}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
