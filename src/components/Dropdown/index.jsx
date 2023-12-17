import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { actionIcon, checkIcon, plusIcon } from "../IconBox/Icons";
import IconBox from "../IconBox";

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
    <Menu>
      <MenuButton as={IconButton} icon={<IconBox icon={plusIcon} />} />
      <MenuList>
        <MenuItem onClick={addCallToAction}>
          <Flex>
            <IconBox icon={actionIcon} />
            <Text>Call to Action</Text>
          </Flex>
        </MenuItem>
        <MenuItem onClick={addTodo}>
          <Flex>
            <IconBox icon={checkIcon} />
            <Text>Todo</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
