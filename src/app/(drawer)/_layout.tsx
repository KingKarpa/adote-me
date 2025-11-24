import { CustomDrawerContent } from "@components/drawer";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer 
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="home/index"
                options={{ drawerLabel: "Início" }}
            />
            <Drawer.Screen
                name="user-profile"
                options={{
                    drawerLabel: "Perfil",
                }}
            />
            <Drawer.Screen
                name="pet-profile/[id]"
                options={{
                    drawerItemStyle: { display: "none" },
                }}
            />
            <Drawer.Screen
                name="adoption-list"
                options={{
                    drawerLabel: "Pets para Adoção",
                }}
            />
        </Drawer>
    );
}
