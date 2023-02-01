import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

const Settings = () => {
  return (
    <View
      style={{
        margin: 16,
        borderRadius: 11,
        overflow: "hidden",
      }}
    >
      <ListItem
        label="Categories"
        detail={
          <Ionicons
            name="chevron-forward-outline"
            color="white"
            style={{ opacity: 0.3 }}
            size={20}
          />
        }
        onClick={() => {}}
      />

      <ListItem label="Erase all data" isDestructive onClick={() => {}} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
