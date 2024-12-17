import { Stack } from "expo-router";
import { colors } from "@/styles/theme";

import { 
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
 } from "@expo-google-fonts/rubik";

import { Loading } from "@/components/loading";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    });

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <Stack screenOptions={{ 
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[100] },
        }}
        />
    )
}
