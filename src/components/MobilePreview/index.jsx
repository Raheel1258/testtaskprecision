import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const MobilePreview = ({ tasks }) => {
  const visibleTasks = tasks.filter(task => !task.isHidden)
  return (
    <Box width="100%" h="100%" p={5} overflowY="scroll">
      <Box
        m="auto"
        width="352.65px"
        overflow="scroll"
        height="724px"
        border="8px"
        borderRadius="50px"
        borderColor="black"
        position="relative"
      >
        <Grid
          templateAreas={`
                  "main"
                  "footer"
                  `}
          gridTemplateRows={"1fr 100px"}
          gridTemplateColumns={"1fr"}
          h="100%"
          color="blackAlpha.700"
          fontWeight="bold"
          borderRadius="50px"
          overflow="scroll"
        >
          <GridItem overflow="scroll" px={5} area="main">
            <Body tasks={visibleTasks} />
          </GridItem>
        </Grid>
        <Box
          borderRadius="50px"
          boxShadow="sm"
          w="100%"
          position="absolute"
          bottom={0}
          left={0}
        >
          <Navbar />
        </Box>
      </Box>
    </Box>
  );
};

export default MobilePreview;
