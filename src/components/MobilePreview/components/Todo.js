import { Flex, Icon, Text } from "@chakra-ui/react";
import { checkPreviewIcon } from "../../IconBox/Icons";

const Todo = () => {
  return (
    <Flex
      borderRadius="8px"
      mb={2}
      py={3}
      px={3}
      mx="auto"
      w="100%"
      boxShadow="sm"
      alignItems="center"
      gap={4}
    >
      <Icon boxSize={8} as={checkPreviewIcon} />
      <Text color="black">New todo item</Text>
    </Flex>
  );
};

export default Todo;
