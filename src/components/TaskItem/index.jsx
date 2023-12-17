import { Flex } from "@chakra-ui/react";
import IconBox from "../IconBox";
import { deleteIcon, hiddenIcon, viewIcon } from "../IconBox/Icons";
import { useState } from "react";

const TaskItem = (props) => {
  const [toggleVisibility, setToggleVisibility] = useState(true);
  const { children, setTask, taskId, ...rest } = props;
console.log(toggleVisibility)
  const handleDelete = () => {
    //filter todos and call to actions to exclude the specific task by its id and update state.
    setTask((currentTasks) => {
      const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
      return [...updatedTasks];
    });
  };

  const handleVisibility = (isHidden) => {
    return (isHidden) => {
        setToggleVisibility(!toggleVisibility);
      setTask((currentTasks) => {
        return currentTasks.map((task) => {
          if (task.id === taskId) return { ...task, isHidden: toggleVisibility };
          else return task;
        });
      });
    };
  };

  return (
    <Flex gap={3}>
      {/* <IconBox icon={dragIcon}/> */}
      {children}
      <IconBox icon={deleteIcon} handleAction={handleDelete} />
      {toggleVisibility ? (
        <IconBox icon={viewIcon} onClick={handleVisibility(true)} />
      ) : (
        <IconBox icon={hiddenIcon} onClick={handleVisibility(false)} />
      )}
    </Flex>
  );
};

export default TaskItem;
