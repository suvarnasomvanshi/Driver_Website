import React, { useState } from "react";
import {
  useGetGalleryImagesQuery,
  useGetImagesByFolderQuery,
} from "../../redux/features/gallery/gallery";

import Error from "../common/Error";
import { Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpiner";
import galleyFileIcon from "../../assets/gallery-folder-icon.svg";
import { img_url } from "../../utils/utils";
import placeholder from "../../assets/images/placeholder.png";

const AlbumCard = ({ item }) => {
  const [isHovered, setHovered] = useState(false)

  const {
    data: Folder,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetImagesByFolderQuery(item?.id);

  if (isLoading) {
    return LoadingSpinner;
  }
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <>
      {isSuccess && (
        <>
          {Folder ? (
            <Link to={`/gallery/${Folder?.id}`}>
              <div id="card">
                <div className="relative">
                  {/* Image div */}
                  <div className="relative">
                    {Folder?.images?.slice(0, 1).map((x, i) => {
                      return (
                        <figure
                          key={i}
                          className="img-wrap w-[312px] h-[234px] rounded-md relative"
                          style={{
                            borderRadius: '10px',
                            borderColor: isHovered ? "#146DFA" : "none",
                            borderWidth: isHovered ? "2px" : "0px"
                          }}
                        >
                          <img
                            className="w-full h-full rounded-md relative"
                            // src={`${img_url}${x?.image}` ?? placeholder}
                            src={`${x?.thumb_image}` ?? placeholder}
                            alt="gallery-cover"
                            onMouseOver={(e) => { setHovered(true) }}
                            onMouseLeave={(e) => { setHovered(false) }}
                          />
                        </figure>
                      );
                    })}
                    <img
                      className="absolute top-[16px] right-[16px]"
                      src={galleyFileIcon}
                      alt="file-icon"
                    />
                  </div>
                  {/* Image div close */}

                  {/* Text div */}
                  <div className="absolute bottom-[26px] left-[16px]">
                    <p className="text-[20px] font-semibold  text-white"
                    style={{
                      fontFamily: 'Helvetica Neue-Medium',
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight: '30px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                    }}
                    >
                      {Folder?.title}
                    </p>
                    <p className="text-[14px] text-white"
                      style={{
                        //styleName: Body Text B2;
                        fontFamily: 'Noto Sans',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '21px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}
                    >
                      {Folder?.images?.length} images
                    </p>
                  </div>
                  {/* Text div close */}
                </div>
              </div>
            </Link>
          ) : (
            <div id="card">
              <div className="relative">
                {/* Image div */}
                <div className="relative">
                  <figure className="w-[312px] h-[234px] rounded-md relative">
                    <img
                      className="w-full h-full rounded-md relative shadow-2xl"
                      npm
                      rnpm
                      start
                      src={placeholder}
                      alt="gallery-cover"
                    />
                  </figure>
                  <img
                    className="absolute top-[16px] right-[16px]"
                    src={galleyFileIcon}
                    alt="file-icon"
                  />
                </div>
                {/* Image div close */}

                {/* Text div */}
                <div className="absolute bottom-[26px] left-[16px]">
                  <p className="text-[20px] font-semibold  text-white">
                    {Folder?.title}
                  </p>
                  <p className="text-[14px] font-medium text-white">
                    {Folder?.images?.length} images
                  </p>
                </div>
                {/* Text div close */}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AlbumCard;
