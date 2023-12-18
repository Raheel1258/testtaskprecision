import { Button, Card, Image, Link } from "@chakra-ui/react";
import cardImgSrc from "../../../assets/png/callToActionImg.png";

const CallToAction = () => {
  return (
    <Card borderRadius="18px" bg="white" mb={2}>
      <Image mb={5} borderTopRadius="18px" src={cardImgSrc} />
      <Button
        mb={5}
        mx="auto"
        w="85%"
        border="2px"
        borderColor="black"
        borderRadius="18px"
        bg="white"
        as={Link}
        href="https://www.google.com/"
        isExternal
      >
        Learn More
      </Button>
    </Card>
  );
};

export default CallToAction;
