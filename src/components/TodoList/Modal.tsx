import React from "react";

const Modal: React.FC = () => {
  return (
    <div
      className={
        "flex align-items-center justify-content-center w-full h-full bg-black position-fixed top-0 left-0"
      }
    >
      <div className={"text-white p-10 rounded-lg bg-white"}>Modal</div>
    </div>
  );
};

export default Modal;
