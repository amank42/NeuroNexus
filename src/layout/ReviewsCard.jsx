import React from "react";

const ReviewsCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-[#adadaa] md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className="text-[#8f8f8b]">
          10/10 would recommend. I had a great experience with this company.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewsCard;
