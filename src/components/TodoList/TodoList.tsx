import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import education from "./../../assets/images/education.jpg";
import recreational from "./../../assets/images/recreational.jpg";
import social from "./../../assets/images/social.jpg";
import diy from "./../../assets/images/diy.jpg";
import charity from "./../../assets/images/charity.jpg";
import cooking from "./../../assets/images/cooking.jpg";
import relaxation from "./../../assets/images/relaxation.jpg";
import music from "./../../assets/images/music.jpg";
import busyWork from "./../../assets/images/busyWork.jpg";
import random from "./../../assets/images/random.jpg";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Category from "./Category";
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
import Modal from "./Modal";

const Todolist: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <div className={"container mx-auto px-8 mb-14"}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Modal />
        <div className={"pb-3 text-white"}>Recreation Types</div>
        <div
          className={"grid grid-cols-2 gap-4 text-center"}
          onClick={() => setIsSidebarOpen(false)}
        >
          <Category
            image={education}
            category={"Education"}
            description={"Because we are all students"}
            alt={"education"}
            d={educationIcon}
          />
          <Category
            image={recreational}
            alt={"recreational"}
            category={"Recreational"}
            description={"Who doesn't like having fun?"}
            d={recreationalIcon}
          />
          <Category
            image={social}
            alt={"social"}
            category={"Social"}
            description={"Need some friends?"}
            d={socialIcon}
          />
          <Category
            image={diy}
            alt={"diy"}
            category={"DIY"}
            description={"Do It Yourself!"}
            d={diyIcon}
          />
          <Category
            image={charity}
            alt={"charity"}
            category={"Charity"}
            description={"There's always more to give"}
            d={charityIcon}
          />
          <Category
            image={cooking}
            alt={"cooking"}
            category={"Cooking"}
            description={"Spend less time on Seamless and more in your kitchen"}
            d={cookingIcon}
          />
          <Category
            image={relaxation}
            alt={"relaxation"}
            category={"Relaxation"}
            description={"Stressed? Just chill out"}
            d={relaxationIcon}
          />
          <Category
            image={music}
            alt={"music"}
            category={"Music"}
            description={"Get them vibes"}
            d={musicIcon}
          />
          <Category
            image={busyWork}
            alt={"busy work"}
            category={"Busywork"}
            description={"Get up off that coach NOW"}
            d={busyWorkIcon}
          />
          <Category
            image={random}
            alt={"random"}
            category={"Random"}
            description={"Get a random activity"}
            d={randomIcon}
          />
        </div>
      </div>
    </>
  );
};

export default Todolist;
