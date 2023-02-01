import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { theme } from "../theme";
type Props = {
  label: string;
  detail?: React.ReactNode;
  onClick?: () => void;
  swipeToDelete?: boolean;
  onDelete?: () => void;
  isDestructive?: boolean;
};

const ListItem = ({
  label,
  detail,
  isDestructive,
  onClick,
  onDelete,
  swipeToDelete,
}: Props) => {
  const item = React.useMemo(
    () => (
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: !!detail ? "space-between" : "flex-start",
          alignItems: "center",
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        }}
        onPress={onClick}
      >
        <Text
          style={{
            fontSize: 18,
            color: isDestructive ? theme.colors.error : "white",
          }}
        >
          {label}
        </Text>
        {detail}
      </TouchableOpacity>
    ),
    []
  );

  if (swipeToDelete) {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 100,
            }}
            onPress={onDelete}
          >
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        )}
        onSwipeableRightOpen={onDelete}
      >
        {item}
      </Swipeable>
    );
  }
  return item;
};

export default ListItem;

const styles = StyleSheet.create({});
