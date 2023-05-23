import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [listOfGoals, setListOfGoals] = useState([]);

  function handleTextInput (enteredText) {
    setEnteredGoalText(enteredText)
  }

  function handleAddGoal(){
    setListOfGoals((currentGoals)=>[...currentGoals, enteredGoalText])
  }


  return (
    <View style={styles.Appcontainer}>
      <View style={styles.addGoal}>
        <TextInput style={styles.TextInput} onChangeText={handleTextInput} placeholder="Your goals..."/>
        <Button onPress={handleAddGoal} title='Add goal'/></View>
        <View style={styles.ListofGoals}>
          {listOfGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex :1,
    padding:60,
    paddingHorizontal: 16
  },
  addGoal:{
    flex: 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : 20,
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc' 
  },
  TextInput : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '75%',
    marginRight : 5, 
    padding : 10

  },
  ListofGoals :{
    marginTop : 5,
    flex : 8
  }
});
