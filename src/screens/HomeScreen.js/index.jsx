import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import SideBar from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import HomeContent from "../../components/HomeContent";
import MobilePreview from "../../components/MobilePreview";

export const Home = () => {

  // handling state for todos and call-to-actions
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
        <Toolbar newTaskId={tasks.length} setTasks={setTasks} />
      </GridItem>
      <GridItem area={"main"} px={10}>
        <HomeContent setTasks={setTasks} tasks={tasks} />
      </GridItem>
      {/*------- Showing Mobile Preview-----  */}
      <GridItem area={"preview"}>
        <MobilePreview tasks={tasks} />
      </GridItem>
    </Grid>
  );
};
