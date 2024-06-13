import React from "react";
import { Stack } from "expo-router";
import GlobalContextProvider from "@/context/GlobalContext";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

export default function RootLayout() {
  return (
      <GlobalContextProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index"  />
          <Stack.Screen name="create" />
        </Stack>
      </GlobalContextProvider>
  );
}
