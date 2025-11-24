import { Stack, useSegments } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { AuthProvider } from "@contexts/AuthContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    const segments = useSegments();
    const isAuth = segments[0] === "(auth)";

    return (
        <SafeAreaProvider>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar style="dark" />

                    <SafeAreaView
                        style={{
                            flex: 1,
                            backgroundColor: isAuth ? "transparent" : "#D2B48C",
                        }}
                        edges={["top", "left", "right"]}
                    >
                        <Stack screenOptions={{ headerShown: false }} />
                    </SafeAreaView>
                </ThemeProvider>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
