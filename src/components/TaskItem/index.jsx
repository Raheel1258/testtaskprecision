import { Flex, Icon } from "@chakra-ui/react";
import IconBox from "../IconBox";
import { deleteIcon, hiddenIcon, viewIcon } from "../IconBox/Icons";
import { useState } from "react";

const TaskItem = (props) => {
  const [toggleVisibility, setToggleVisibility] = useState(true);
  const { children, setTask, taskId, ...rest } = props;
  console.log(toggleVisibility);

  const handleDelete = () => {
    console.log('deleting?')
    //filter todos and call to actions to exclude the specific task by its id and update state.
    setTask((currentTasks) => {
      const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
      console.log(updatedTasks)
      return [...updatedTasks];
    });
  };

  const handleVisibility = (isHidden) => {
    return (isHidden) => {
      setToggleVisibility(!toggleVisibility);
      setTask((currentTasks) => {
        return currentTasks.map((task) => {
          if (task.id === taskId)
            return { ...task, isHidden: toggleVisibility };
          else return task;
        });
      });
    };
  };

  return (
    <Flex gap={3} alignItems="center" minW="80%">
      {children}
      <Icon
        color="#BDBDC1"
        cursor="pointer"
        _hover={{ color: "black" }}
        boxSize={6}
        as={deleteIcon}
        onClick={handleDelete}
      />
      {toggleVisibility ? (
        <Icon
          cursor="pointer"
          color="#BDBDC1"
          _hover={{ color: "black" }}
          boxSize={6}
          as={viewIcon}
          onClick={handleVisibility(true)}
        />
      ) : (
        <Icon
          cursor="pointer"
          color="#BDBDC1"
          _hover={{ color: "black" }}
          boxSize={6}
          as={hiddenIcon}
          onClick={handleVisibility(false)}
        />
      )}
    </Flex>
  );
};

export default TaskItem;
