import React, { useState } from "react";
import Modal from "../Modal/Modal";

type CategoryType = {
  image: string;
  alt: string;
  category: string;
  description: string;
  d: string;
  descriptionModal: string;
};

const Category: React.FC<CategoryType> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className={"position-relative"}>
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
          <button
            className={"text-yellow-500"}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
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
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        descriptionModal={props.descriptionModal}
      />
    </div>
  );
};

export default Category;
