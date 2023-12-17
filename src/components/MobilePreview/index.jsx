import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import TaskItem from "../TaskItem";
import IconBox from "../IconBox";
import { dragIcon } from "../IconBox/Icons";

const MobilePreview = ({ tasks }) => {

  return (
    <Box width="100%" h="100%" p={5}>
      <Box
        m="auto"
        width="352.65px"
        height="724px"
        border="8px"
        borderRadius="50px"
        borderColor="black"
      >
        <Text>Counter</Text>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <TaskItem>
                <IconBox icon={dragIcon} />
                <Flex>
                  <Text>{task.content}</Text>
                </Flex>
              </TaskItem>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default MobilePreview;
