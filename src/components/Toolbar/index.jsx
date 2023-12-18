import { Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { feedIcon } from "../IconBox/Icons";
import Dropdown from "../Dropdown";
import previewIconSrc from "../../assets/png/preview.png";
import actionIconSrc from "../../assets/png/action.png";
import todoIconSrc from "../../assets/png/todo.png";

const Toolbar = ({ setTasks, newTaskId }) => {
  return (
    <Flex pt={12} h="100%" flexDir="column" px={3} gap={10} boxShadow="md">
      <Flex alignItems="center" gap={5} w="90%" justifyContent="space-between">
        <Flex alignItems="center" gap={2} px={5}>
          <Icon boxSize={5} as={feedIcon} />
          <Text color="black" fontSize="2xl" fontWeight={800}>
            Homefeed
          </Text>
        </Flex>
        <Dropdown newTaskId={newTaskId} setTasks={setTasks} />
      </Flex>
      <Flex flexDir="column" gap={3}>
        <Flex
          borderRadius="15px"
          p={5}
          gap={5}
          alignItems="center"
          bg="#ecedf0"
        >
          <Image src={previewIconSrc} />
          <Text fontSize="xl">Live Preview</Text>
        </Flex>
        <Divider borderWidth="2px" />
      </Flex>
      <Flex px={5} alignItems="center" gap={5}>
        <Image src={actionIconSrc} />
        <Text>Call to Action</Text>
      </Flex>
      <Flex px={5} alignItems="center" gap={5}>
        <Image src={todoIconSrc} />
        <Text>Todo</Text>
      </Flex>
    </Flex>
  );
};

export default Toolbar;
