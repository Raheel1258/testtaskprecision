import { Flex, Icon } from "@chakra-ui/react";

const IconBox = (props) => {
  const { icon, handleAction, ...rest } = props;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      onClick={handleAction}
      {...rest}
    >
      {<Icon color="inherit" _hover={{ color: "black" }} as={icon} />}
    </Flex>
  );
};

export default IconBox;
