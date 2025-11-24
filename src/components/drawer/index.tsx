import { useAuth } from "@contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { colors } from "@styles/colors";
import { Highlight, Subtitle } from "@styles/typography";
import { usePathname, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { useTheme } from "styled-components/native";

export function CustomDrawerContent(props: any) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const theme = useTheme();
    const pathname = usePathname();
    
    // Detecta qual rota está ativa
    const isHomeActive = pathname === "/home";
    const isAdoptionListActive = pathname === "/adoption-list";
    const isUserProfileActive = pathname === "/user-profile";

    const handleProfilePress = () => {
        if (user) {
            router.push("/(drawer)/user-profile" as any);
        } else {
            router.push("/(auth)/login" as any);
        }
        props.navigation.closeDrawer();
    };

    const handleHomePress = () => {
        router.push("/(drawer)/home" as any);
        props.navigation.closeDrawer();
    };

    const handleAdoptionListPress = () => {
        router.push("/(drawer)/adoption-list" as any);
        props.navigation.closeDrawer();
    };

    const handleLogout = () => {
        logout();
        router.push("/(drawer)/home" as any);
        props.navigation.closeDrawer();
    };

    return (
        <DrawerContainer>
                <DrawerHeader>
                    <LogoContainer>
                        <Subtitle>
                            Adote-<Highlight>Me</Highlight>
                        </Subtitle>
                    </LogoContainer>
                    {user && (
                        <UserInfoContainer>
                            <ProfileImage 
                                source={require("@assets/icons/user-profile.png")} 
                            />
                            <UserInfo>
                                <UserName>{user.nome}</UserName>
                                <UserEmail>{user.email}</UserEmail>
                            </UserInfo>
                        </UserInfoContainer>
                    )}
                </DrawerHeader>

                <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 20 }}>
                    <DrawerItem
                        label="Início"
                        icon={({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        )}
                        onPress={handleHomePress}
                        labelStyle={[
                            DrawerItemLabel,
                            isHomeActive && { color: theme.colors.accent }
                        ]}
                        style={DrawerItemStyle}
                        focused={isHomeActive}
                        activeTintColor={theme.colors.accent}
                        inactiveTintColor={theme.colors.text}
                    />

                    <DrawerItem
                        label="Pets para Adoção"
                        icon={({ color, size }) => (
                            <Ionicons name="paw" size={size} color={color} />
                        )}
                        onPress={handleAdoptionListPress}
                        labelStyle={[
                            DrawerItemLabel,
                            isAdoptionListActive && { color: theme.colors.accent }
                        ]}
                        style={DrawerItemStyle}
                        focused={isAdoptionListActive}
                        activeTintColor={theme.colors.accent}
                        inactiveTintColor={theme.colors.text}
                    />

                    <DrawerItem
                        label="Perfil"
                        icon={({ color, size }) => (
                            <Ionicons 
                                name={user ? "person" : "log-in"} 
                                size={size} 
                                color={color} 
                            />
                        )}
                        onPress={handleProfilePress}
                        labelStyle={[
                            DrawerItemLabel,
                            isUserProfileActive && { color: theme.colors.accent }
                        ]}
                        style={DrawerItemStyle}
                        focused={isUserProfileActive}
                        activeTintColor={theme.colors.accent}
                        inactiveTintColor={theme.colors.text}
                    />

                    {user && (
                        <DrawerItem
                            label="Sair"
                            icon={({ color, size }) => (
                                <Ionicons name="log-out" size={size} color={color} />
                            )}
                            onPress={handleLogout}
                            labelStyle={DrawerItemLabel}
                            style={DrawerItemStyle}
                            focused={false}
                            activeTintColor={theme.colors.accent}
                            inactiveTintColor={theme.colors.text}
                        />
                    )}
                </DrawerContentScrollView>

                <DrawerFooter>
                    <FooterText>© 2024 Adote-Me</FooterText>
                </DrawerFooter>
        </DrawerContainer>
    );
}

const DrawerContainer = styled.View`
    flex: 1;
    background-color: ${colors.background};
`;

const DrawerHeader = styled.View`
    background-color: ${colors.primary};
    padding: 24px 16px;
    border-bottom-width: 2px;
    border-bottom-color: ${colors.tertiary};
`;

const LogoContainer = styled.View`
    margin-bottom: 16px;
`;

const UserInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;

const ProfileImage = styled.Image`
    width: 32px;
    height: 32px;
    margin-right: 12px;
`;

const UserInfo = styled.View`
    flex: 1;
`;

const UserName = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 4px;
`;

const UserEmail = styled.Text`
    font-size: 12px;
    color: ${colors.tertiary};
`;

const DrawerItemLabel = {
    fontSize: 16,
    fontWeight: "700" as const,
    marginLeft: 24,
};

const DrawerItemStyle = {
    marginLeft: 0,
    paddingLeft: 0,
};

const DrawerFooter = styled.View`
    padding: 16px;
    border-top-width: 1px;
    border-top-color: ${colors.primary};
    background-color: ${colors.primary};
`;

const FooterText = styled.Text`
    text-align: center;
    font-size: 12px;
    color: ${colors.tertiary};
`;

