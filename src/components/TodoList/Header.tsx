import React, { Dispatch, SetStateAction } from "react";
import { Favorite, History, InsertEmoticon, Mail } from "@material-ui/icons";
import { IconButton, Tooltip } from "@material-ui/core";

type HeaderPropsType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <>
      <header
        className={
          "flex justify-content-between text-2xl border-b-2 border-black mb-3"
        }
      >
        <span className={"p-4 text-white"}>I'm Bored...</span>
        <ul className={"flex justify-content-between p-4"}>
          <button onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}>
            <Tooltip title={"Favorites"}>
              <IconButton size={"large"}>
                <Favorite color={"warning"} />
              </IconButton>
            </Tooltip>
          </button>
          <button>
            <Tooltip title={"History"}>
              <IconButton size={"large"}>
                <History color={"warning"} />
              </IconButton>
            </Tooltip>
          </button>
          <button>
            <Tooltip title={"Suggest New Activity"}>
              <IconButton size={"large"}>
                <Mail color={"warning"} />
              </IconButton>
            </Tooltip>
          </button>
          <button>
            <Tooltip title={"Jokester!"}>
              <IconButton size={"large"}>
                <InsertEmoticon color={"warning"} />
              </IconButton>
            </Tooltip>
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
