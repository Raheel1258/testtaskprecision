import { Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { sidebarFoldIcon } from "../IconBox/Icons";
import { sidebarItems } from "./sidebarItems";
import avatarSrc from '../../assets/png/sidebarAvatar.png';

export const SideBar = () => {
  return (
    <Flex h="100%" flexDir="column" gap={5}>
      <Flex pt={10} pb={5} alignItems="center" justifyContent="center">
        <Icon cursor="pointer" boxSize={8}  as={sidebarFoldIcon} />
      </Flex>
      {sidebarItems.map((icon) => {
        if (icon.name === "feed")
          return (
            <Flex cursor="pointer" bg="#ecedf0" borderRadius="10px" p={3} mx="auto" w="55%" alignItems="center" justifyContent="center">
              <Icon boxSize={6} as={icon.icon} />
            </Flex>
          );
        else
          return (
            <Flex cursor="pointer" p={2} mx="auto" w="50%" alignItems="center" justifyContent="center">
              <Icon boxSize={6} as={icon.icon} />
            </Flex>
          );
      })}
      <Flex mb={8} mt="auto" alignItems="center" justifyContent="center">
        <Image cursor="pointer" src={avatarSrc} />
      </Flex>
    </Flex>
  );
};
