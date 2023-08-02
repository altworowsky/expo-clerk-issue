import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";

const CLERK_PUBLISHABLE_KEY = "pk_test_Z2xvd2luZy13b2xmLTI3LmNsZXJrLmFjY291bnRzLmRldiQ"
export default function App() {
  const [loaded] = useFonts({
    'Inter-Medium': require('./assets/Inter-Medium.otf')
  })

  if (!loaded) {
    return null
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SafeAreaView style={styles.container}>
        <Text style={{ fontFamily: 'Inter-Medium', fontSize: 30 }}>Hello world!</Text>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});