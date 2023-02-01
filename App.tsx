import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Expenses, Add, Reports, Settings } from "./src/screens";
import { theme } from "./src/theme/index";
import { TabBarIcon } from "./src/components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="expenses" />,
          }}
          name="Expenses"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="reports" />,
          }}
          name="Reports"
          component={Reports}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="add" />,
          }}
          name="Add"
          component={Add}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="settings" />,
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
