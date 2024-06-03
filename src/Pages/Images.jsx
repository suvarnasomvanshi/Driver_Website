import { Link, useParams } from "react-router-dom";
import {
  useGetGalleryImagesQuery,
  useGetImagesByFolderQuery,
} from "../redux/features/gallery/gallery";

import ArrowLeft from "../assets/icon/arrow-left.png";
import Error from "../Components/common/Error";
import ImageCard from "../Components/Gallery/ImageCard";
import LoadingSpinner from "../Components/common/LoadingSpiner";
import React from "react";
import SmallGreenWave from "../Components/SmallGreenWave";

const Images = () => {
  let { id } = useParams();

  const {
    data: Folder,
    isLoading,
    isError,
    error,
  } = useGetImagesByFolderQuery(id);

  if (isLoading) {
    return LoadingSpinner;
  }
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <div className="max-w-screen h-auto flex-col justify-center items-center mb-[120px]">
        {/* gallery banner shape here */}
        <SmallGreenWave
          heading="Gallery"
          subheading=" Explore Suvarna’s inspiring journey through images and videos that tell our story."
        />
        {/* gallery banner shape close here */}

        {/* album details here */}

        {/* gallery here */}
        <div className="w-full flex flex-grow-1 justify-center items-center mt-64">
          <div className="lg:w-10/12 w-11/12 flex flex-col justify-start items-center">
            {/* gallery switch here */}
            <Link
              to={"/gallery"}
              className="w-full flex justify-start items-center"
            >
              <button
                type="button"
                className={`text-[20px] font-medium me-4 flex justify-center items-center gap-3 `}
              >
                <img src={ArrowLeft} alt="" />{" "}
                <span
                style={{
                  //styleName: Sub-Header 2;
                  fontFamily: 'Helvetica Neue-Medium',
                  // fontWeight: '550',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
                >Images / {Folder?.title}</span>
              </button>
            </Link>
            <div className="flex flex-wrap items-center w-full gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8">
              <ImageCard item={Folder?.images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
