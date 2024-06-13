import React, { createContext, useContext, useRef, useState } from 'react'
import { View, Text } from 'react-native'

interface ToDo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

interface GlobalContextProps {
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    refTodos: React.MutableRefObject<ToDo[]>;
}

const globalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = (): GlobalContextProps => {
    const context = useContext(globalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
}


const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
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
    ]);
    const refTodos = useRef(todos);

    return (
        <globalContext.Provider value={{ todos, setTodos, refTodos }}>
            {children}
        </globalContext.Provider>
  )
}

export default GlobalContextProvider;