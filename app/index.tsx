import PressableButton from "@/components/PressableButton";
import ToDoList from "@/components/ToDoList";
import { PrincipalTitle, StyledViewHome } from "@/styles/StyledViewHome";
import { Alert, Text, View, useColorScheme } from "react-native";

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
      <PressableButton
        textColor={
          colorScheme === 'dark' ? '#333' : '#f0f0f0'
        } 
        title="Create new task!"
        bgColor={
          colorScheme === 'dark' ? '#f0f0f0' : '#333'
        }
        onPress={() => {
          Alert.alert('Create new task!');
        }}
      />
      <ToDoList 
        
      />
    </StyledViewHome>
  );
}
