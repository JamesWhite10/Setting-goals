import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header";

const RoutingProject: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default RoutingProject;
