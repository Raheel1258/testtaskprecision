import { Flex, Text } from "@chakra-ui/react";
import IconBox from "../IconBox";
import { actionIcon, checkIcon, feedIcon, previewIcon } from "../IconBox/Icons";
import Dropdown from "../Dropdown";

const Toolbar = ({
  setTasks,
  newTaskId,
}) => {
  return (
    <Flex flexDir="column">
      <Flex>
        <IconBox icon={feedIcon} />
        <Text>HomeFeed</Text>
        <Dropdown
          newTaskId={newTaskId}
          setTasks={setTasks}
        />
      </Flex>
      <Flex>
        <IconBox icon={previewIcon} />
        <Text>Live Preview</Text>
      </Flex>
      <Flex>
        <IconBox icon={actionIcon} />
        <Text>Call to Action</Text>
      </Flex>
      <Flex>
        <IconBox icon={checkIcon} />
        <Text>Todo</Text>
      </Flex>
    </Flex>
  );
};

export default Toolbar;
