import { Flex } from "@chakra-ui/react"
import IconBox from "../IconBox";
import { deleteIcon, viewIcon } from "../IconBox/Icons";

const TaskItem = (props) => {
    const {children, setTask, taskId, ...rest} = props;

    const handleDelete = () => {
        //filter todos and call to actions to exclude the specific task by its id and update state.
        setTask(currentTasks => {
            const updatedTasks = currentTasks.filter(task => task.id !== taskId);
            return [...updatedTasks];
        })
    }
    return (
        <Flex gap={3}>
            {/* <IconBox icon={dragIcon}/> */}
            {children}
            <IconBox icon={deleteIcon} handleAction={handleDelete} />
            <IconBox icon={viewIcon}/>
        </Flex>
    )
}

export default TaskItem;