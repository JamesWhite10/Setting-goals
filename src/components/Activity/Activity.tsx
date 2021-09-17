import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import style from "./Activity.module.css";
import logo from "./../../assets/images/logo.png";

const Activity: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [value1, setValue1] = useState<string>("0");
  return (
    <div className={style.activityBlock}>
      <div className={style.should}>
        <h3>YOU SHOULD</h3>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className={style.formControl}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <button type="button" className="btn btn-danger">
          SAVE FOR YOU LATER
        </button>
        <div className={style.logo}>
          <img src={logo} alt={"logo"} />
        </div>
      </div>
      <div className={style.details}>
        <h3>ACTIVITY DETAILS</h3>
        <select
          className={style.formSelect}
          aria-label="Default select example"
        >
          <option selected>CHOOSE ANY TYPE</option>
          <option value="1">Cooking</option>
          <option value="2">Purchases</option>
          <option value="3">Trips</option>
        </select>
        <h5>PARTICIPANTS</h5>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className={style.formControl}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <div>
          <label htmlFor="customRange2" className="form-label">
            <h5>MAX BUDGET</h5>
          </label>
          <RangeSlider
            tooltipStyle={{ color: "white", fontSize: "16px" }}
            className={style.slider}
            value={value}
            onChange={(changeEvent) =>
              setValue(Number(changeEvent.target.value))
            }
            min={0}
            max={10}
            step={1}
          />
        </div>
        <div>
          <label htmlFor="customRange3" className="form-label">
            <h5>ACCESSIBILITY</h5>
          </label>
          <RangeSlider
            tooltipStyle={{ color: "white", fontSize: "16px" }}
            className={style.slider}
            value={value1}
            onChange={(changeEvent) =>
              setValue1(String(changeEvent.target.value))
            }
            min={0}
            max={8}
            step={2}
          />
        </div>
        <button type="button" className="btn btn-danger">
          RESET FILTERS
        </button>
        <button type="button" className="btn btn-dark">
          HIT ME WITH THE NEW ONE
        </button>
      </div>
    </div>
  );
};

export default Activity;
