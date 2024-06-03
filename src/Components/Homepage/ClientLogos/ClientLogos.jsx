// import PropTypes from "prop-types";
// import { React, useEffect, useState } from "react";
// import "../../../styles/ClientLogosstyle.css";
// import { img_url } from "../../../utils/utils";

// export const ClientLogos = ({ className,clients }) => {
//   const [property1, setProperty1] = useState("variant-2");
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProperty1((prevProperty1) => (prevProperty1 === "variant-2" ? "default" : "variant-2"));
//     }, 2150); 
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className={`client-logos ${className} `}>
//       {
//         clients?.map((e) => {
//           return (
//             <img
//               className={`md:w-[120px] w-[80px] m-auto mb-4 mt-4`}
//               alt="logo"
//               src={
//                 property1 === "variant-2"
//                   ? img_url + e.logo
//                   : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-13.png"
//               } key={e.id}
//             />
//           );
//         })
//       }
//       {/* <img
//         className={`md:w-[120px] w-[80px] `}
//         alt="logo"
//         src={
//           property1 === "variant-2"
//             ? clients?.logo
//             : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-13.png"
//         }
//       /> */}
//       {/* <img
//         className={`md:w-[120px] w-[80px] `}
//         alt="logo"
//         src={
//           property1 === "variant-2"
//             ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-20.png"
//             : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-14.png"
//         }
//       />
//       <img
//         className={`${property1 === "variant-2" ? "h-[70px]" : "md:w-[120px] w-[80px] " }`}
//         alt="logo"
//         src={
//           property1 === "variant-2"
//             ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-21.png"
//             : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-15.png"
//         }
//       />
//       <img
//         className={`md:w-[120px] w-[80px]`}
//         alt="logo"
//         src={
//           property1 === "variant-2"
//             ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-22.png"
//             : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-16.png"
//         }
//       />
//       <img
//         className={`md:w-[120px] w-[80px] ${property1 === "variant-2" ? "" : "scale-75"} `}
//         alt="logo"
//         src={
//           property1 === "variant-2"
//             ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-23@2x.png"
//             : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-17.png"
//         }
//       /> */}
     
//     </div>
//   );
// };

// ClientLogos.propTypes = {
//   className: PropTypes.string,
// };

import PropTypes from "prop-types";
import { React, useEffect, useState } from "react";
import "../../../styles/ClientLogosstyle.css";
import { img_url } from "../../../utils/utils";

export const ClientLogos = ({ className, clients }) => {
  const [property1, setProperty1] = useState("variant-2");

  useEffect(() => {
    const interval = setInterval(() => {
      setProperty1((prevProperty1) =>
        prevProperty1 === "variant-2" ? "default" : "variant-2"
      );
    }, 2150);
    return () => clearInterval(interval);
  }, []);

  // Split clients into two rows
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

  return (
    <div className={`client-logos ${className} `}>
      {property1 === "variant-2"
        ? [...row1, ...row2].map((e, index) => (
            <img
              className={`md:w-[120px] w-[80px] m-auto mb-4 mt-4 fade-in`}
              alt="logo"
              // src={img_url + e.logo}
              src={e.logo}
              key={e.id}
            />
          ))
        : [...row2, ...row1].map((e, index) => (
            <img
              className={`md:w-[120px] w-[80px] m-auto mb-4 mt-4 fade-in`}
              alt="logo"
              src={e.logo}
              key={e.id}
            />
          ))}
    </div>
  );
};

ClientLogos.propTypes = {
  className: PropTypes.string,
};
