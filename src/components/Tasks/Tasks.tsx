import Slider from "@material-ui/core/Slider";
import React from "react";
import style from "./Tasks.module.css";
import { Box, Typography } from "@material-ui/core";

const Tasks: React.FC = () => {
  return (
    <div className={style.tasksBlock}>
      <div className={style.info}>
        <div className={style.taskType}>
          <h6>COOKING</h6>
        </div>
        <div className={style.task}>MAKE BREAD FROM SCRATCH</div>
        <div className={style.participants}>1 PARTICIPANTS</div>
        <div className={style.progressTask}>
          <Box sx={{ width: 420 }}>
            <Typography
              id="input-slider"
              style={{
                textAlign: "center",
                color: "mediumvioletred",
                letterSpacing: "2px",
                padding: "10px",
              }}
              gutterBottom
            >
              Choose Your Success
            </Typography>
            <Slider
              aria-label="Progress range"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={25}
              marks
              min={0}
              max={100}
            />
          </Box>
        </div>
      </div>
      <div className={style.buttons}>
        <div className={style.pullButton}>
          <button type="button" className="btn btn-danger">
            PULL ACTIVITY
          </button>
        </div>
        <div className={style.doneButton}>
          <button type="button" disabled={true} className="btn btn-success">
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
