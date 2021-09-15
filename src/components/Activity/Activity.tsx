import React from "react";
import style from "./Activity.module.css";

const Activity: React.FC = () => {
  return (
    <div className={style.activityBlock}>
      <div className={style.should}>
        <div className={style.sh}>YOU SHOULD</div>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className={style.formControl}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <button type="button" className="btn btn-danger">
          <div>SAVE FOR YOU LATER</div>
        </button>
      </div>
      <div className={style.details}>
        <div className={style.ac}>ACTIVITY DETAILS</div>
        <select
          className={style.formSelect}
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div>PARTICIPANTS</div>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className={style.formControl}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <div>MAX BUDGET</div>
        <div>
          <label htmlFor="customRange2" className="form-label">
            Example range
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            id="customRange2"
          />
        </div>
        <div>
          <label htmlFor="customRange3" className="form-label">
            Example range
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="8"
            step="2"
            id="customRange3"
          />
        </div>
        <div>
          <button type="button" className="btn btn-warning">
            RESET FILTERS
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            HIT ME WITH THE NEW ONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
