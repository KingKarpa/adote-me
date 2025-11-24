import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="home/index"
                options={{ drawerLabel: "Início" }}
            />
            <Drawer.Screen
                name="pet-profile/[id]"
                options={{
                    drawerItemStyle: { display: "none" },
                }}
            />
        </Drawer>
    );
}
