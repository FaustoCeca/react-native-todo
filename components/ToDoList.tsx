import { View, Text, ScrollView, useColorScheme } from 'react-native'
import React, { useRef, useState } from 'react'
import { StyledToDoList } from '@/styles/StyledToDoList';
import ToDo from './ToDo';
import PressableButton from './PressableButton';
import { useGlobalContext } from '@/context/GlobalContext';

interface ToDo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

const ToDoList = () => {
    const { todos, setTodos, refTodos } = useGlobalContext();
    const colorScheme = useColorScheme();

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));

        setTimeout(() => {
            setTodos(todos.filter((todo) => todo.id !== id));
        }, 1000);
    }

  return (
    <>
        <StyledToDoList 
            data={todos}
            keyExtractor={(item: ToDo, index: number) => item.id.toString()}
            renderItem={
                ({ item }: { item: ToDo }) => (
                <ToDo 
                    id={item.id}
                    onPress={() => handleDone(item.id)}
                    done={item.done}
                    title={item.title}
                    description={item.description}
                />
            )}
        />
        {
            todos.length === 0 && (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: colorScheme === 'dark' ? '#f0f0f0' : '#333'
                        }}
                    >
                        Try to create a new task!
                    </Text>
                </View>
            )
        }
    </>
  )
}

export default ToDoList;