import React from "react";

type IconPropsType = {
  d: string;
};

const IconType: React.FC<IconPropsType> = (props) => {
  return (
    <div className={"flex w-full h-full mr-4"}>
      <button className={"text-yellow-500"}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={props.d} />
        </svg>
      </button>
    </div>
  );
};

export default IconType;
