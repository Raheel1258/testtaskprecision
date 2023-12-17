import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import TaskItem from "../TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IconBox from "../IconBox";
import { dragIcon } from "../IconBox/Icons";
import { useState } from "react";

const HomeContent = ({ tasks, setTasks }) => {
  const handleOnDragEnd = (result) => {
    //if the item is dragged outside the droppable area, the result is null  
    if (!result.destination) return;
    console.log(result);
    const tasksAfterDragDrop = Array.from(tasks);
    const [reorderedTask] = tasksAfterDragDrop.splice(result.source.index, 1);
    tasksAfterDragDrop.splice(result.destination.index, 0, reorderedTask);
    setTasks(tasksAfterDragDrop);
  };


  return (
    <Flex>
      <Flex flexDir="column">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
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
                      >
                        <TaskItem taskId={task.id} setTask={setTasks}>
                          <IconBox
                            {...provided.dragHandleProps}
                            icon={dragIcon}
                          />
                          <Flex>
                            <Text>{task.content}</Text>
                          </Flex>
                        </TaskItem>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Flex>
      {/* <MobilePreview counter={counter} /> */}
    </Flex>
  );
};

export default HomeContent;
