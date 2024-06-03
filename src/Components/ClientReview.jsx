import React from "react";
import { TestimonialSingle } from "../Components/TestimonialSingle";
import { useGetAllReviewsQuery } from "../redux/features/review/reviewApi";
import { Line51 } from "./Homepage/icons/Line51/Line51";
import { Line52 } from "./Homepage/icons/Line52/Line52";
import { img_url } from "../utils/utils";

const ClientReview = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllReviewsQuery();

  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  console.log(data)
  return (
    <div
      className="w-full flex flex-col md:justify-center justify-start items-center my-[30px] py-[20px] overflow-x-hidden"
      id="testimonial"
    >
      <p className="md:text-[36px] text-[30px] text-[#08090A] font-bold md:mb-[64px] mb-[20px]">
        What our customers have to say
      </p>
      <div className="lg:w-10/12 md:w-11/12 w-10/12 flex flex-col justify-center  items-center md:flex-row md:flex-wrap">
        <div className="w-45vw ">
          <TestimonialSingle
            className="testimonial-single-instance "
            frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390.svg"
            maskGroup={data[0].testimonial_image}
            // maskGroup={img_url + data[0].testimonial_image}
            text={data[0].auther_first_name + " " + data[0].auther_last_name}
            text1={`${data[0].state},${data[0].address.split(",")[data[0].address.split(",").length-1]}`}
            text2={data[0].description}
          />
          <Line52
            className="line-5-2 lg:my-[36px] md:hidden lg:block hidden"
            color="url(#paint0_linear_1971_10008)"
          />
          <TestimonialSingle
            className="testimonial-single-instance"
            frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-1.svg"
            // maskGroup={img_url + data[1].testimonial_image}
            maskGroup={data[1].testimonial_image}
            text={data[1].auther_first_name + " " + data[1].auther_last_name}
            text1={`${data[1].state},${data[1].address.split(",")[data[1].address.split(",").length-1]}`}
            text2={data[1].description}
          />
        </div>
        <div className="frame-46 lg:mx-[36px] relative min-w-[10px]">
          <Line51
            className="line-6 my-[36px] md:hidden lg:block hidden"
            color="url(#paint0_linear_1971_10012)"
          />
          <Line51
            className="line-6  my-[36px] md:hidden lg:block hidden"
            color="url(#paint0_linear_1971_10012)"
          />
        </div>
        <div className="frame-45 ">
          <TestimonialSingle
            className="testimonial-single-instance"
            frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-2.svg"
            // line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3-3.svg"
            // maskGroup={img_url + data[2].testimonial_image}
            maskGroup={data[2].testimonial_image}
            text={data[2].auther_first_name + " " + data[2].auther_last_name}
            text1={`${data[2].state},${data[2].address.split(",")[data[2].address.split(",").length-1]}`}
            text2={data[2].description}
          />
          <Line52
            className="line-5-2 lg:my-[36px] md:hidden lg:block hidden"
            color="url(#paint0_linear_1971_10008)"
          />
          <TestimonialSingle
            className="testimonial-single-instance"
            frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-3.svg"
            line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3.svg"
            // maskGroup={img_url + data[3].testimonial_image}
            maskGroup={data[3].testimonial_image}
            text={data[3].auther_first_name + " " + data[3].auther_last_name}
            text1={`${data[3].state},${data[3].address.split(",")[data[3].address.split(",").length-1]}`}
            text2={data[3].description}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
