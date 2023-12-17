import { Flex, Text } from "@chakra-ui/react";
import TaskItem from "../TaskItem";

const HomeContent = ({ callToActions, todos, setCallToActions, setTodos }) => {
  return (
    <Flex>
      <Flex flexDir="column">
        {todos.map((todo) => (
          <TaskItem key={todo.id} taskId={todo.id} setTask={setTodos}>
            <Flex>
              <Text>{todo.content}</Text>
            </Flex>
          </TaskItem>
        ))}
        {callToActions.map((callToAction) => (
          <TaskItem key={callToAction.id} taskId={callToAction.id} setTask={setCallToActions}>
            <Flex>
              <Text>{callToAction.content}</Text>
            </Flex>
          </TaskItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default HomeContent;
