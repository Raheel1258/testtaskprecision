import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { SideBar } from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import HomeContent from "../../components/HomeContent";

export const Home = () => {
  const [todos, setTodos] = useState([]);
  const [callToActions, setCallToActions] = useState([]);
  console.log("todos: ", todos);
  console.log("actions: ", callToActions);
  return (
    <Grid
      templateAreas={`
                  "nav subNav main"
                 
                  `}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={"86px 357px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem area={"subNav"}>
        <Toolbar
          newTodoId={todos.length}
          newCallToActionId={callToActions.length}
          setTodos={setTodos}
          setCallToActions={setCallToActions}
        />
      </GridItem>
      <GridItem area={"main"}>
        <HomeContent
          setCallToActions={setCallToActions}
          setTodos={setTodos}
          callToActions={callToActions}
          todos={todos}
        />
      </GridItem>
    </Grid>
  );
};
