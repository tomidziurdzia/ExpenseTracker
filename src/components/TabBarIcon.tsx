import { Ionicons } from "@expo/vector-icons";

type TabBarIconProps = {
  name?: string;
  color: string;
  size: number;
  type: "expenses" | "reports" | "add" | "settings";
};

export const TabBarIcon = ({ name, color, size, type }: TabBarIconProps) => {
  switch (type) {
    case "expenses":
      return (
        <Ionicons
          name="file-tray-outline"
          color={color}
          size={size}
          type={type}
        />
      );

    case "reports":
      return (
        <Ionicons
          name="stats-chart-outline"
          color={color}
          size={size}
          type={type}
        />
      );
    case "add":
      return (
        <Ionicons name="add-outline" color={color} size={size} type={type} />
      );
    case "settings":
      return (
        <Ionicons
          name="settings-outline"
          color={color}
          size={size}
          type={type}
        />
      );
    default:
      return null;
  }
};
