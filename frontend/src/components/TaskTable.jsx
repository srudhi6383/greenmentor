import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react'; 
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const TaskTable = ({ tasks, onEdit, onDelete }) => {
  return (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Task Title</Th>
          <Th>Task Description</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((task) => (
          <Tr key={task._id}>
            <Td>{task.title}</Td>
            <Td>{task.description}</Td>
            <Td>
              <IconButton
                aria-label="Edit Task"
                icon={<EditIcon />}
                colorScheme="teal"
                onClick={() => onEdit(task)}
              />
            </Td>
            <Td>
              <IconButton
                aria-label="Delete Task"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => onDelete(task._id)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TaskTable;
