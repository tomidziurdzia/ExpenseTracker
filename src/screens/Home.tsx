import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme/index";
import { TabBarIcon } from "../components/TabBarIcon";
import { Expenses, Add, Reports, Settings } from "./index";

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
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
  );
};

export default Home;

const styles = StyleSheet.create({});
