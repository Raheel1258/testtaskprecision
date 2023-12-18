import { Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
// use react-beautiful-dnd for drag and drop functionality
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TaskItem from "../TaskItem";
import IconBox from "../IconBox";
import { dragIcon } from "../IconBox/Icons";
import actionIconSrc from "../../assets/png/action.png";
import todoIconSrc from "../../assets/png/todo.png";

const HomeContent = ({ tasks, setTasks }) => {

  //implement function to drag and drop todos and actions
  const handleOnDragEnd = (result) => {
    //if the item is dragged outside the droppable area, the result is null
    if (!result.destination) return;
    const tasksAfterDragDrop = Array.from(tasks);
    // reordering the array for todos and actions
    const [reorderedTask] = tasksAfterDragDrop.splice(result.source.index, 1);
    tasksAfterDragDrop.splice(result.destination.index, 0, reorderedTask);
    setTasks(tasksAfterDragDrop);
  };

  return (
    <Flex flexDir="column" alignItems="center" pt={28}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <List w="100%" {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(provided) => (
                    <ListItem
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      mb={5}
                      border="1px"
                      w="100%"
                      mx="auto"
                      borderColor="#ecedf0"
                      borderRadius="10px"
                      p={3}
                    >
                      <TaskItem taskId={task.id} setTask={setTasks}>
                        <Flex alignItems="center" px={3} gap={4} grow={1}>
                          <IconBox
                            color="#BDBDC1"
                            _hover={{ color: "black" }}
                            {...provided.dragHandleProps}
                            icon={dragIcon}
                          />
                          <Image
                            src={
                              task.type === "action"
                                ? actionIconSrc
                                : todoIconSrc
                            }
                          />
                          <Text fontSize="lg">{task.content}</Text>
                        </Flex>
                      </TaskItem>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {/* used this to mark boundary for dropable area */}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Flex>
  );
};

export default HomeContent;
