import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalsInput from "./Components/GoalsInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  function handleDelete(){
    //TO-DO
  }

  function handleAddGoal() {
    setListOfGoals((currentGoals) => [...currentGoals, enteredGoalText])
    setModalVisible(false)
  }

  function startAddGoalHandler(){
    setModalVisible(true)
  }

  function CancelHandler(){
    setModalVisible(false)
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.Appcontainer}>
      <Button onPress={startAddGoalHandler} title = "Add New Goal" color={"#9a43fa"}/>
      <GoalsInput visible={modalVisible}
        addGoal={handleAddGoal}
        cancel={CancelHandler}
        enteredGoalText={enteredGoalText}
        setEnteredGoalText={setEnteredGoalText}
        setListOfGoals={setListOfGoals}
      />
      <View style={styles.ListofGoals}>
        <ScrollView>
          {listOfGoals.map((goal) => (
            <Pressable onPress={handleDelete}>
            <View style={styles.GoalItem} key={goal}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    padding: 60,
    paddingHorizontal: 16,
    backgroundColor: "#31085e",
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
