import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { SideBar } from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import HomeContent from "../../components/HomeContent";
import MobilePreview from "../../components/MobilePreview";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks: ", tasks);
  return (
    <Grid
      templateAreas={`
                  "nav subNav main preview"
                 
                  `}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"86px 357px 357px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem area={"subNav"}>
        <Toolbar
          // newTodoId={todos.length}
          newTaskId={tasks.length}
          // newCallToActionId={callToActions.length}
          setTasks={setTasks}
          // setCallToActions={setCallToActions}
        />
      </GridItem>
      <GridItem area={"main"}>
        <HomeContent
          setTasks={setTasks}
          tasks={tasks}
        />
      </GridItem>
      <GridItem area={"preview"}>
        <MobilePreview
          tasks={tasks}
        />
      </GridItem>
    </Grid>
  );
};
