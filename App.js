import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import GoalsInput from "./Components/GoalsInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  return (
    <View style={styles.Appcontainer}>
      <GoalsInput
        enteredGoalText={enteredGoalText}
        setEnteredGoalText={setEnteredGoalText}
        setListOfGoals={setListOfGoals}
      />
      <View style={styles.ListofGoals}>
        <ScrollView>
          {listOfGoals.map((goal) => (
            <View style={styles.GoalItem} key={goal}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    padding: 60,
    paddingHorizontal: 16,
    backgroundColor: "#120026",
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
