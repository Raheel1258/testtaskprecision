import { Flex, Icon } from "@chakra-ui/react";
import {
  clipboardPreviewIcon,
  homePreviewIcon,
  membersPreviewIcon,
} from "../../IconBox/Icons";

const Navbar = () => {
  return (
    <Flex
      px={10}
      py={5}
      w="100%"
      h="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon boxSize={8} as={homePreviewIcon} />
      <Icon boxSize={8} as={membersPreviewIcon} />
      <Icon boxSize={7} as={clipboardPreviewIcon} />
    </Flex>
  );
};

export default Navbar;
