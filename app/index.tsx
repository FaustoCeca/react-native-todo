import React from "react";
import PressableButton from "@/components/PressableButton";
import ToDoList from "@/components/ToDoList";
import { PrincipalTitle, StyledViewHome } from "@/styles/StyledViewHome";
import { useColorScheme } from "react-native";
import { Link } from "expo-router";

export default function Index() {
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
        Todo App RN!
      </PrincipalTitle>
      <Link
        href={'/create'}
        asChild
      >
        <PressableButton
          textColor={
            colorScheme === 'dark' ? '#333' : '#f0f0f0'
          } 
          title="Create new task!"
          bgColor={
            colorScheme === 'dark' ? '#f0f0f0' : '#333'
          }
          onPress={() => {
          }}
        />
      </Link>
      <ToDoList 
        
      />
    </StyledViewHome>
  );
}
