import React, { Dispatch, SetStateAction } from "react";
import "tailwindcss/tailwind.css";
import IconType from "./IconType";
import {
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { ArrowBackIos, Person, Search } from "@material-ui/icons";
import {
  busyWorkIcon,
  charityIcon,
  cookingIcon,
  diyIcon,
  educationIcon,
  musicIcon,
  randomIcon,
  recreationalIcon,
  relaxationIcon,
  socialIcon,
} from "../../core/IconList";

type SidebarPropsType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarPropsType> = (props) => {
  const sidebarOpen =
    "flex h-screen opacity-90 position-fixed insert-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out z-10";
  const sidebarClosed =
    "flex h-screen opacity-90 position-fixed insert-y-0 left-0 transform -translate-x-full md:relative md:-translate-x-full transition duration-200 ease-in-out z-10";
  return (
    <div
      className={props.isSidebarOpen ? sidebarOpen : sidebarClosed}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={"bg-gray-500 text-yellow-500 w-auto pt-6 rounded-lg"}>
        <div
          className={
            "flex justify-content-between align-items-center text-yellow-500"
          }
        >
          <div className={"text-3xl font-extrabold pl-6"}>FAVORITES</div>
          <div className={"flex mr-2"}>
            <button
              onClick={() => {
                props.setIsSidebarOpen(!props.isSidebarOpen);
              }}
            >
              <IconButton>
                <ArrowBackIos color={"warning"} />
              </IconButton>
            </button>
          </div>
        </div>
        <div className={"flex pt-6"}>
          <p className={"p-2 text-xl"}>Filter:</p>
          <div className={"flex w-full h-full ml-5 p-2"}>
            <IconType d={educationIcon} />
            <IconType d={recreationalIcon} />
            <IconType d={socialIcon} />
            <IconType d={diyIcon} />
            <IconType d={charityIcon} />
            <IconType d={cookingIcon} />
            <IconType d={relaxationIcon} />
            <IconType d={musicIcon} />
            <IconType d={busyWorkIcon} />
            <IconType d={randomIcon} />
          </div>
        </div>
        <div className={"flex justify-content-center items-center mt-3"}>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Search"
              color={"warning"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color={"warning"} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div className={"w-20 mt-3"}>
            <Input
              color={"warning"}
              style={{ color: "white" }}
              type={"number"}
              defaultValue={1}
              startAdornment={
                <InputAdornment position={"start"}>
                  <Person color={"warning"} />
                </InputAdornment>
              }
            />
          </div>
        </div>
        <div className={"p-2 mt-3 text-white"}>
          You currently have no boring antidotes in favorites
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
