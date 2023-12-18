import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { SideBar } from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import HomeContent from "../../components/HomeContent";
import MobilePreview from "../../components/MobilePreview";

export const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Grid
      templateAreas={`
                  "nav subNav main preview"
                 
                  `}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"86px 357px 400px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <SideBar />
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
      <GridItem area={"main"} px={10}>
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
