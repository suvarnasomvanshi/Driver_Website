import "../Components/Gallery/Gallery.css"

import React, { useEffect, useState } from "react";
import {
  useGetGalleryFolderQuery,
  useGetGalleryVideosQuery,
} from "../redux/features/gallery/gallery";

import AlbumCard from "../Components/Gallery/AlbumCard";
import LoadingSpinner from "../Components/common/LoadingSpiner";
import SmallGreenWave from "../Components/SmallGreenWave";
import VideoCard from "../Components/Gallery/VideoCard";

const Gallery = () => {
  const [type, setType] = useState("videos");

  const { data, isLoading, error } = useGetGalleryFolderQuery();

  const {
    data: video,
    isLoading: videoLoading,

    error: videoerror,
  } = useGetGalleryVideosQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  if (isLoading || videoLoading) {
    return <LoadingSpinner />;
  }

  if (error || videoerror) {
    return <p>Error Happen</p>;
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

        {/* gallery here */}
        <div className=" container w-full flex flex-grow-1 justify-center items-center mt-36">
          <div className=" w-11/12 flex flex-col justify-start items-center">
            {/* gallery switch here */}
            <div className="w-full flex justify-start items-center">
              <button
                type="button"
                className={`text-[20px] font-medium me-4 ${type === "videos" ? "border-b-4  border-[#146DFA]" : ""
                  }`}
                onClick={() => {
                  setType("videos");
                }}
                style={{
                  color: type === "videos" ? "#08090A" : "#3C4043",
                  // border:type === "videos" ? "" : "#3C4043",
                  fontWeight: '500',
                  height:'30px',
                  //styleName: Sub-Header 2;
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
              >
                Videos
              </button>
              <button
                type="button"
                className={`text-[20px] font-medium me-4 ${type === "images" ? "border-b-4 border-[#146DFA]" : ""
                  }`}
                onClick={() => {
                  setType("images");
                }}
                style={{
                  color: type === "images" ? "#08090A" : "#3C4043",
                  fontWeight: '500',
                  height:'30px',
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
              >
                Images
              </button>
            </div>
            {/* gallery switch close here */}

            {/* gallery navigate here */}
            {type === "videos" ? (
              <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8">
                {video.map((item, index) => (
                  <VideoCard key={index} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8">
                {data?.map((item, index) => (
                  <AlbumCard key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
