import styled from "styled-components/native";

interface ToDoItemProps {
    done: boolean;
}


export const StyledToDoList = styled.FlatList`
    width: 100%;
    margin-top: 20px;
    padding: 0 20px;
`

export const StyledToDoItem = styled.View<ToDoItemProps>`
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: ${props => props.done ? 'green' : '#f0f0f0'};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DoneText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #f0f0f0;
`