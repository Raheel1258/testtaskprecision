import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { actionIcon, checkIcon, plusIcon } from "../IconBox/Icons";
import IconBox from "../IconBox";
import actionIconSrc from '../../assets/png/action.png'
import todoIconSrc from '../../assets/png/todo.png'

const Dropdown = ({setTasks, newTaskId}) => {

    const addCallToAction = () => {
        const newCallToAction = {
            content: 'Call to Action',
            type:'action',
            icon: <IconBox icon={actionIcon} />,
            id: newTaskId,
            isHidden: false,
        }
        setTasks(currentTasks => [...currentTasks, newCallToAction ])
    }

    const addTodo = () => {
        const newTodo = {
            content: 'Todo',
            type:'todo',
            icon: <IconBox icon={checkIcon} />,
            id: `${newTaskId}`,
        }
        setTasks(currentTasks => [...currentTasks, newTodo ])
    }

  return (
    <Menu closeOnSelect={false} autoSelect={false}>
      <MenuButton _hover={{bg:'white'}} _active={{bg:'white'}} bg="white" as={IconButton} icon={<IconBox icon={plusIcon} />} />
      <MenuList w="285px" boxShadow="md" borderRadius="15px" py={2} px={4}>
        <MenuItem _hover={{bg: '#ecedf0'}} onClick={addCallToAction}>
          <Flex alignItems="center" gap={3}>
            <Image src={actionIconSrc} />
            <Text fontWeight="500">Call to Action</Text>
          </Flex>
        </MenuItem>
        <MenuItem _hover={{bg: '#ecedf0'}} onClick={addTodo}>
          <Flex alignItems="center" gap={3}>
            <Image src={todoIconSrc} />
            <Text fontWeight="500">Todo</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
