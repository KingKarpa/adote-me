import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="dark" backgroundColor="transparent" translucent />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    );
}
