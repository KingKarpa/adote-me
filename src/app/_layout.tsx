import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@styles/theme";
import { AuthProvider } from "@contexts/AuthContext";

export default function RootLayout() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Stack screenOptions={{ headerShown: false }} />
            </ThemeProvider>
        </AuthProvider>
    );
}
