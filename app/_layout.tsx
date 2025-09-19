import { SCREENS } from "@/constants/screens";
import { ScreenConfig } from "@/types";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
    return (
        <>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false, 
                }}
            >
                {Object.values(SCREENS).map((screen: ScreenConfig) => (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        options={screen.options}
                    />
                ))}
            </Stack>
        </>
    );
}