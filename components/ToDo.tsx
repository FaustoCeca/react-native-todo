import React from 'react'
import { View, Text } from 'react-native'
import { DoneText, StyledToDoItem } from '@/styles/StyledToDoList';

interface ToDoProps {
    id: number;
    title: string;
    description: string;
    done: boolean;
    onPress: () => void;
}

const ToDo = ({title, description, done, onPress}: ToDoProps) => {

  return (
    <StyledToDoItem
        done={done}
        onPress={onPress}
    >
        <View>
            <Text
                style={{
                    textDecorationLine: done ? 'line-through' : 'none'
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    textDecorationLine: done ? 'line-through' : 'none'
                }}
            >
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