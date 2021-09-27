import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from "./pages/Error404";
import Activity from "../Activity/Activity";
import MyList from "../MyList/MyList";
import Todolist from "../TodoList/TodoList";

export const PATH = {
  ACTIVITY: "/activity",
  MY_LIST: "/my-list",
  TODO_LIST: "/todolist",
};

const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <Redirect to={PATH.ACTIVITY} />}
        />
        <Route path={PATH.ACTIVITY} render={() => <Activity />} />
        <Route path={PATH.MY_LIST} render={() => <MyList />} />
        <Route path={PATH.TODO_LIST} render={() => <Todolist />} />
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
};

export default Routes;
