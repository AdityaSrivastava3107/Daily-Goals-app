import { StyleSheet, View, Button, TextInput } from "react-native";
function GoalsInput({ enteredGoalText, setEnteredGoalText, setListOfGoals }) {
  function handleTextInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    setListOfGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }
  return (
    <View style={styles.addGoal}>
      <TextInput
        style={styles.TextInput}
        onChangeText={handleTextInput}
        placeholder="Your goals..."
        placeholderTextColor={"#cccccc"}
      />
      <Button onPress={handleAddGoal} title="Add goal" />
    </View>
  );
}

export default GoalsInput;

const styles = StyleSheet.create({
  addGoal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 5,
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
});
