import React from "react";
import { Text, View } from "react-native";
import { theme } from "../theme/index";

const CategoryRow = ({ color, name }: Omit<Category, "id">) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "flex-start",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        backgroundColor: theme.colors.card,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "white",
        }}
      ></View>
      <Text style={{ color: "white", fontSize: 16, marginLeft: 16 }}>
        {name}
      </Text>
    </View>
  );
};

export default CategoryRow;
