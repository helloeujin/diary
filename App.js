import { NavigationContainer } from "@react-navigation/native";
import { setTestDeviceIDAsync } from "expo-ads-admob";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Navigator from "./navigator";

export default function App() {
  const startLoading = async () => {
    // Set global test device ID
    await setTestDeviceIDAsync("EMULATOR");
  };

  startLoading();

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
