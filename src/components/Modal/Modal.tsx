import React, { Dispatch, SetStateAction } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Close, Favorite, Person } from "@material-ui/icons";
import style from "./Modal.module.css";

type ModalPropsType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  descriptionModal: string;
};

const Modal: React.FC<ModalPropsType> = (props) => {
  return (
    <div
      className={props.isModalOpen ? style.modalOpen : style.modalClosed}
      onClick={() => props.setIsModalOpen(false)}
    >
      <div
        className={
          props.isModalOpen ? style.modalContentOpen : style.modalContentClosed
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={"flex justify-content-between"}>
          <div className={"text-xl"}>{props.descriptionModal}</div>
          <button className={"mt-3"}>
            <IconButton size={"large"}>
              <Close color={"warning"} />
            </IconButton>
          </button>
        </div>
        <div className={"flex align-items-center"}>
          <span className={"text-lg"}>Participants:</span>
          <div className={"mb-1"}>
            <Person color={"warning"} />
          </div>
        </div>
        <button className={"p-2"}>
          <Tooltip title={"Add to favorites"}>
            <IconButton size={"large"}>
              <Favorite color={"warning"} />
            </IconButton>
          </Tooltip>
        </button>
      </div>
    </div>
  );
};

export default Modal;
