import FormTask from '@/components/FormTask';
import { PrincipalTitle, StyledViewHome } from '@/styles/StyledViewHome'
import React from 'react'
import { View, Text, useColorScheme } from 'react-native'

const CreatePage = () => {
  const colorScheme = useColorScheme();

    return (
    <StyledViewHome
        bgColor={
            colorScheme === 'dark' ? '#333' : '#f0f0f0'
        }
    >
        <PrincipalTitle
            color={
                colorScheme === 'dark' ? '#f0f0f0' : '#333'
            }
        >
            Create a new task!
        </PrincipalTitle>
        <FormTask />
    </StyledViewHome>
  )
}

export default CreatePage;