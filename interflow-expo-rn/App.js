import React from "react";
import "./flow/config.js";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigationContainerRef,
  useNavigationState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingView from "./views/OnboardingView";
import CustomizeView from "./views/CustomizeView";
import HomeView from "./views/HomeView";
import SocialView from "./views/SocialView";
import GamesView from "./views/GamesView";
import RevealView from "./views/RevealView";
import WalletsConnectionView from "./views/WalletsConnectionView";
import PfpView from "./views/PfpView.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import AuthContext from "./contexts/AuthContext.jsx";
import UserContext, { useUser } from "./contexts/UserContext.jsx";
import FclContext from "./contexts/FclContext";
import HeaderComponent from "./components/HeaderComponent.jsx";
import UserDetailsView from "./views/UserDetailsView.jsx";
import MetaraceView from "./views/MetaraceView.jsx";
import UserCollectionView from "./views/UserCollectionView.jsx";
import NftDetailsView from "./views/NftDetailsView.jsx";
import EventDetailsView from "./views/EventDetailsView.jsx";
import InterspaceView from "./views/InterspaceView.jsx";
import ProfileView from "./views/ProfileView.jsx";
import PfpHeaderComponent from "./components/header/PfpHeaderComponent.jsx";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Device from "expo-device";
import GameDetailsView from "./views/games/GameDetailsView.jsx";
import { StripeProvider } from "@stripe/stripe-react-native";
// import useNavigation hook

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  const navigationRef = useNavigationContainerRef();

  return (
    <HomeStack.Navigator ref={navigationRef}>
      <HomeStack.Screen
        name="HomeView"
        component={HomeView}
        options={({ navigation, route }) => ({
          // headerStyle: styles.navBar,
          headerLeft: () => <PfpHeaderComponent navigation={navigation} />,
          headerBackground: () => <HeaderComponent />,
          headerTitle: "",
          headerBackVisible: false,
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        })}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileView}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Reveal" component={RevealView} />
      <HomeStack.Screen
        name="GameDetails"
        component={GameDetailsView}
        options={{
          headerLargeTitle: true,
        }}
      />
      <HomeStack.Screen name="Metarace" component={MetaraceView} />
      <HomeStack.Screen name="EventDetails" component={EventDetailsView} />
      <HomeStack.Screen name="Interspace" component={InterspaceView} />
    </HomeStack.Navigator>
  );
}

const SocialStack = createNativeStackNavigator();

function SocialStackNavigator() {
  return (
    <SocialStack.Navigator>
      <SocialStack.Screen
        name="SocialView"
        component={SocialView}
        options={{
          headerShown: false,
        }}
      />
      <SocialStack.Screen
        name="UserDetails"
        component={UserDetailsView}
        options={{
          headerShown: false,
        }}
      />
      <SocialStack.Screen
        name="UserCollection"
        component={UserCollectionView}
        options={{
          headerShown: false,
        }}
      />
      <SocialStack.Screen
        name="NftDetails"
        component={NftDetailsView}
        options={{
          headerShown: false,
        }}
      />
    </SocialStack.Navigator>
  );
}

const GamesStack = createNativeStackNavigator();

function GamesStackNavigator() {
  return (
    <GamesStack.Navigator>
      <GamesStack.Screen
        name="GamesView"
        component={GamesView}
        options={{
          headerShown: false,
        }}
      />
    </GamesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  // const route = useRoute()

  // console.log("navigation", navigation)

  // const navState = navigation.getState();
  // console.log("navState", navState)
  // console.log("route names", currentRoutes
  // )
  // const currentView = navState

  const isIos = Device.osName === "iOS";

  const CustomTabBarButton = (props) => {
    // if (getFocusedRouteNameFromRoute(route) !== 'GameDetails') {
    return (
      <TouchableOpacity
        style={{
          top: -44,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // ...styles.shadow,
        }}
        onPress={props.onPress}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 50,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            borderColor: "lightgrey",
            borderWidth: 0.5,
          }}
        >
          {props.children}
        </View>
      </TouchableOpacity>
    );
    // }
    // return
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        // const state = useNavigationState(state => state)
        // console.log("tabs state", state.routes[0].state.routes[0])
        return {
          tabBarActiveTintColor: "#fff",
          tabBarStyle: {
            position: "absolute",
            height:
              getFocusedRouteNameFromRoute(route) !== "GameDetails" ? 120 : 0,
            bottom: -40,
            width: "100%",
          },
          tabBarBackground: () => (
            <BlurView
              tint="dark"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarIconStyle: {
            marginBottom: isIos ? 0 : 16,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Social"
        component={SocialView}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
          tabBarIconStyle: {
            marginBottom: isIos ? 0 : 16,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plus"
        component={HomeStackNavigator}
        options={({ navigation, route }) => ({
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={"white"} size={size} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} navigation={navigation} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Games"
        component={GamesStackNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="gamepad-variant"
              color={color}
              size={size}
            />
          ),
          tabBarIconStyle: {
            marginBottom: isIos ? 0 : 16,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Game"
        component={GamesStackNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="gamepad-variant"
              color={color}
              size={size}
            />
          ),
          tabBarIconStyle: {
            marginBottom: isIos ? 0 : 16,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  navBar: {
    height: 29,
  },
});
const publishableKey = "pk_test_51MfOe3EFbOKoDaT5L6wpjDT4tL5ptYILn9BZ1po4JLSstXHqrzXmvbB02KHVXL4Xem1M5zhaQ7W0TBG8a54Xb0JR001WpO85nL";
export default function App() {
  return (
    <AuthContext>
      <UserContext>
        <StripeProvider publishableKey={publishableKey}>
          <FclContext>
            <LoginComponent /> 
            {/* <RequestsComponent /> */}
            {/* <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Onboarding"
                  options={{
                    headerShown: false,
                  }}
                  component={OnboardingView}
                />
                <Stack.Screen
                  name="Wallets"
                  component={WalletsConnectionView}
                />
                <Stack.Screen
                  name="Customize"
                  component={CustomizeView}
                  options={({ navigation }) => ({
                    // headerStyle: styles.navBar,
                    headerRight: () => (
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{
                            marginRight: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={() => {
                            console.log("pressed");
                            navigation.navigate("Onboarding");
                          }}
                        >
                          <MaterialCommunityIcons
                            name="check-outline"
                            size={24}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    ),
                    headerBackground: () => (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "transparent",
                          // borderBottomWidth: 1,
                          // borderBottomColor: '#f0f0f0',
                        }}
                      >
                        <ImageBackground
                          source={require("./assets/avatar/bg(1).png")}
                          style={{
                            flex: 1,
                            resizeMode: "cover",
                            justifyContent: "center",
                          }}
                        ></ImageBackground>
                      </View>
                    ),
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                      fontWeight: "bold",
                    },
                  })}
                />
                <Stack.Screen
                  name="Photo"
                  component={PfpView}
                  options={{
                    // headerStyle: styles.navBar,
                    headerBackground: () => (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "transparent",
                          // borderBottomWidth: 1,
                          // borderBottomColor: '#f0f0f0',
                        }}
                      >
                        <ImageBackground
                          source={require("./assets/avatar/bg(1).png")}
                          style={{
                            flex: 1,
                            resizeMode: "cover",
                            justifyContent: "center",
                          }}
                        ></ImageBackground>
                      </View>
                    ),
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                      fontWeight: "bold",
                    },
                  }}
                />
                <Stack.Screen
                  name="Home"
                  component={HomeTabs}
                  options={({ navigation, route }) => ({
                    // headerStyle: styles.navBar,
                    headerLeft: () => (
                      <PfpHeaderComponent navigation={navigation} />
                    ),
                    headerBackground: () => <HeaderComponent />,
                    headerTitle: "",
                    headerBackVisible: false,
                    // headerTintColor: "#fff",
                    // headerTitleStyle: {
                    //   fontWeight: "bold",
                    // },
                  })}
                />
                <Stack.Screen
                  name="GameDetails"
                  component={GameDetailsView}
                  options={{
                    headerLargeTitle: true,
                    headerTitle: "Metarace",
                  }}
                />
                <Stack.Screen
                  name="Metarace"
                  component={MetaraceView}
                  options={{
                    headerTitle: "Level 1",
                  }}
                />
                <Stack.Screen
                  name="EventDetails"
                  component={EventDetailsView}
                  // options={{
                  //   headerTitle: "Level 1"
                  // }}
                />
                <Stack.Screen
                  name="Interspace"
                  component={InterspaceView}
                  // options={{
                  //   headerTitle: "Level 1"
                  // }}
                />
                <Stack.Screen name="Reveal" component={RevealView} />
                <Stack.Screen name="Profile" component={ProfileView} />
                <Stack.Screen name="UserDetails" component={UserDetailsView} />
                <Stack.Screen
                  name="UserCollection"
                  component={UserCollectionView}
                />
                <Stack.Screen name="NftDetails" component={NftDetailsView} />
              </Stack.Navigator>
            </NavigationContainer> */}
          </FclContext>
        </StripeProvider>
      </UserContext>
    </AuthContext>
  );
}
