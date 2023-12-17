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

const Dropdown = ({setTodos, setCallToActions, newTodoId, newCallToActionId}) => {

    const addCallToAction = () => {
        const newCallToAction = {
            content: 'Call to Action',
            icon: <IconBox icon={actionIcon} />,
            id: newCallToActionId,
        }
        setCallToActions(currentActions => [...currentActions, newCallToAction ])
    }

    const addTodo = () => {
        const newTodo = {
            content: 'Todo',
            icon: <IconBox icon={checkIcon} />,
            id: newTodoId,
        }
        setTodos(currentTodos => [...currentTodos, newTodo ])
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
