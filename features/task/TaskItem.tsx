import { IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { VFC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { deleteTask, editTask, updateTask } from "./taskSlice";
import { Task } from "../../interfaces/types";

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box p={2} borderBottom="1px" borderColor="gray.200" h={12}>
      <Flex>
        <Checkbox
          mr={4}
          pb={2}
          colorScheme="red"
          checked={task.completed}
          onChange={() => {
            dispatch(updateTask({ ...task, completed: !task.completed }));
          }}
        />
        <Box pt={1}>{task.title}</Box>
        <Spacer />
        <IconButton
          aria-label="Search database"
          colorScheme="linkedin"
          variant="outline"
          mr={2}
          size="sm"
          icon={<EditIcon />}
          onClick={() => dispatch(editTask(task))}
        />
        <IconButton
          aria-label="Search database"
          colorScheme="red"
          variant="outline"
          size="sm"
          icon={<DeleteIcon />}
          onClick={() => dispatch(deleteTask(task))}
        />
      </Flex>
    </Box>
  );
};

export default TaskItem;
