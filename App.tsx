import { ShoppingListItem } from "./components/ShoppingListItem";
import { theme } from "./theme";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" isCompleted />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Milk" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
