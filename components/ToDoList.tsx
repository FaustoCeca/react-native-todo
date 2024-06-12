import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StyledToDoList } from '@/styles/StyledToDoList';
import ToDo from './ToDo';

interface ToDo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

const ToDoList = () => {
    const [todos, setTodos] = useState<ToDo[]>([
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        done: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        done: false
    }, 
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        done: false
    }, 
    {
        id: 4,
        title: 'Task 4',
        description: 'Description 4',
        done: false
    },
    ]);

  return (
    <StyledToDoList 
        data={todos}
        keyExtractor={(item: ToDo) => item.id.toString()}
        renderItem={({ item }: { item: ToDo }) => (
            <ToDo 
                done={item.done}
                title={item.title}
                description={item.description}
            />
        )}
    />
  )
}

export default ToDoList;