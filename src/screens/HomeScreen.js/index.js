import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { SideBar } from "../../components/SideBar";

export const Home = () => {
  return (
    <Grid
      templateAreas={`
                  "nav subNav main"
                 
                  `}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"subNav"}>
        SubNav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
};
