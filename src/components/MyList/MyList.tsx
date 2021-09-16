import React from "react";
import style from "./MyList.module.css";
import Tasks from "../Tasks/Tasks";

const Activity: React.FC = () => {
  return (
    <div className={style.myListBlock}>
      <div>
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
      <div className={style.clear}>
        <button type="button" className="btn btn-danger">
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

export default Activity;
