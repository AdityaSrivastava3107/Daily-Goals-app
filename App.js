import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  function handleTextInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    setListOfGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.Appcontainer}>
      <View style={styles.addGoal}>
        <TextInput
          style={styles.TextInput}
          onChangeText={handleTextInput}
          placeholder="Your goals..." placeholderTextColor={'#cccccc'}
        />
        <Button onPress={handleAddGoal} title="Add goal" />
      </View>
      <View style={styles.ListofGoals}>
        {listOfGoals.map((goal) => (
          <View style={styles.GoalItem} key={goal}>
            <Text style={{color : 'white'}}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    padding: 60,
    paddingHorizontal: 16,
    backgroundColor : '#120026'
  },
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
    color : 'white',
    borderRadius : 5
  },
  ListofGoals: {
    marginTop: 5,
    flex: 8,
  },
  GoalItem: {
    alignItems: "center",
    padding: 5,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
    margin: 5,
  },
});
