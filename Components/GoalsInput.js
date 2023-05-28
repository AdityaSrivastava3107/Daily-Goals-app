import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
function GoalsInput({
  addGoal,
  setEnteredGoalText,
  visible,
  cancel
}) {
  function handleTextInput(enteredText) {
    setEnteredGoalText(enteredText);
  }

  
  return (
    <View>
    <Modal visible={visible} animationType="slide" >
      <View style={styles.addGoal}>
        <Image style={styles.Image} source={require('../assets/Images/Goal.png')}/>
        <TextInput
          style={styles.TextInput}
          onChangeText={handleTextInput}
          placeholder="Your goals..."
          placeholderTextColor={"#686869"}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.AddButton}>
            <Button color={'#9a43fa'} onPress={addGoal} title="Add goal" />
          </View>
          <View style={styles.CancelButton}>
            <Button color={'#c21717'} title="Cancel" onPress={cancel}/>
          </View>
        </View>
      </View>
    </Modal>
    </View>
  );
}

export default GoalsInput;

const styles = StyleSheet.create({
  addGoal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor : '#31085e'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor : "#e4d0ff",
    width: "75%",
    marginRight: 5,
    padding: 10, 
    color: "#120438",
    borderRadius: 5,
  },
  Image :{
    width : 100,
    height : 100,
    margin : 20
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  AddButton : {
    margin : 10,
  },
  CancelButton : {
    margin : 10
  }
});
