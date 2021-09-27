import React from "react";

type CategoryType = {
  image: string;
  alt: string;
  category: string;
  description: string;
  d: string;
};

const Category: React.FC<CategoryType> = (props) => {
  return (
    <div className={"rounded-md position-relative"}>
      <img src={props.image} alt={props.alt} />
      <div
        className={
          "flex justify-content-between w-full align-items-center bg-gray-700 bg-opacity-50 position-absolute bottom-0"
        }
      >
        <div className={"p-3 text-left"}>
          <div className={"text-white text-2xl"}>{props.category}</div>
          <div className={"text-white text-sm"}>{props.description}</div>
        </div>
        <div className={"flex mr-6"}>
          <button className={"text-yellow-500"}>
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={props.d} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
