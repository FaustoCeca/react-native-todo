import { View, Text } from 'react-native'
import React from 'react'
import { DoneText, StyledToDoItem } from '@/styles/StyledToDoList';

interface ToDoProps {
    title: string;
    description: string;
    done: boolean;
}

const ToDo = ({title, description, done}: ToDoProps) => {
  return (
    <StyledToDoItem
        done={done}
    >
        <View>
            <Text>
                {title}
            </Text>
            <Text>
                {description}
            </Text>
        </View>

        <DoneText>
            Done
        </DoneText>
    </StyledToDoItem>
  )
}

export default ToDo;