import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import CategoryRow from "../components/CategoryRow";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import { RectButton, Swipeable } from "react-native-gesture-handler";

interface Color {
  hex: string;
}

const Categories = () => {
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(
    theme.colors.primary
  );
  const [newName, setNewName] = React.useState("");
  const [categories, setCategories] = React.useState<Category[]>([
    {
      id: "1",
      color: theme.colors.primary,
      name: "Groceries",
    },
    {
      id: "2",
      color: theme.colors.card,
      name: "Clothes",
    },
  ]);

  const onSelectColor = ({ hex }: Color) => {
    // do something with the selected color.
    setSelectedColor(hex);
  };

  const handleCategory = () => {
    if (newName.length === 0) return;
    setCategories([
      ...categories,
      {
        id: Math.random().toString(),
        color: selectedColor,
        name: newName,
      },
    ]);
    setNewName("");
    setSelectedColor(theme.colors.primary);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={112}
        style={{
          margin: 16,
          flex: 1,
        }}
      >
        <View
          style={{
            borderRadius: 11,
            overflow: "hidden",
          }}
        >
          {categories.map(({ id, color, name }: Category) => (
            <Swipeable
              key={id}
              renderRightActions={() => {
                return (
                  <View
                    style={{ width: 75, backgroundColor: theme.colors.error }}
                  >
                    <RectButton
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() =>
                        setCategories(
                          categories.filter((category) => category.id !== id)
                        )
                      }
                    >
                      <Ionicons
                        name="trash-bin-outline"
                        size={24}
                        style={{ color: "white" }}
                      />
                    </RectButton>
                  </View>
                );
              }}
            >
              <CategoryRow color={color} name={name} />
            </Swipeable>
          ))}
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 8,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setShowColorPicker(!showColorPicker)}
          >
            <View
              style={{
                backgroundColor: selectedColor,
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "white",
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholderTextColor="gray"
            placeholder="Category name"
            onChange={(e) => setNewName(e.nativeEvent.text)}
            value={newName}
            style={{
              color: "white",
              borderColor: theme.colors.border,
              borderWidth: 1,
              flex: 1,
              borderRadius: 8,
              paddingLeft: 8,
              paddingVertical: 4,
              marginLeft: 16,
              height: 40,
            }}
          />
          <TouchableOpacity onPress={handleCategory} style={{ padding: 6 }}>
            <Ionicons
              name="send-outline"
              size={24}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Modal
        transparent={true}
        visible={showColorPicker}
        animationType="fade"
        onRequestClose={() => setShowColorPicker(!showColorPicker)}
      >
        <View
          style={{
            padding: 24,
            flex: 1,
            backgroundColor: theme.colors.card,
          }}
        >
          <ColorPicker
            hideSliders
            color={selectedColor}
            onColorChange={(color) => onSelectColor({ hex: fromHsv(color) })}
            style={{ flex: 1 }}
          />
          <Button
            onPress={() => setShowColorPicker(!showColorPicker)}
            title="Select"
          />
        </View>
      </Modal>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
