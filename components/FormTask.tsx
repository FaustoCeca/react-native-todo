import React, { useState } from 'react'
import { View, Text, TextInput, useColorScheme, Alert } from 'react-native'
import PressableButton from './PressableButton';
import { StyledTextInput } from '@/styles/StyledToDoList';
import { useGlobalContext } from '@/context/GlobalContext';
import { useNavigation } from 'expo-router';

const FormTask = () => {
    const { setTodos } = useGlobalContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const colorScheme = useColorScheme();
    const navigation = useNavigation();


    const handleSubmit = () => {
        if (title.trim() === '' || description.trim() === '') {
            Alert.alert('Error', 'All fields are required');
            return;
        }

        setTodos((prevTodos) => (
            [
                ...prevTodos,
                {
                    id: prevTodos.length + 1,
                    title,
                    description,
                    done: false
                }
            ]
        ));

        setTitle('');
        setDescription('');
        // ignore this in typescript
        // @ts-ignore
        navigation.navigate('index');
    }

    return (
    <View>
        <StyledTextInput
            placeholder='Title'
            onChangeText={newTitle => setTitle(newTitle)}
            value={title}
        />
        <StyledTextInput
            placeholder='Description'
            onChangeText={newDescription => setDescription(newDescription)}
            value={description}
        />

        <PressableButton 
            title='Create Task'
            bgColor={
                colorScheme === 'dark' ? '#f0f0f0' : '#333'
            }
            textColor={
                colorScheme === 'dark' ? '#333' : '#f0f0f0'
            }
            onPress={() => handleSubmit()}
        />
    </View>
  )
}

export default FormTask;