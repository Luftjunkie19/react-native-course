import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, View } from "react-native";

import GoalInput from "./componenents/GoalInput";
import GoalItem from "./componenents/GoalItem";

export default function App() {
  const [taskName, setTaskname] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function onChangeFunction(entered) {
    setTaskname(entered);
  }

  function closeModal() {
    setModalStatus(false);
  }

  function onClickFunction() {
    if (taskName.trim("") === "") {
      return;
    }

    goalsList.push({ content: taskName, id: new Date().getTime() });
    setGoalsList(goalsList);
    setTaskname("");
    setModalStatus(false);

    console.log(goalsList);
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#b180f0"
          onPress={() => {
            setModalStatus(true);
          }}
        />

        {modalStatus && (
          <GoalInput
            styles={styles}
            onChangeFunction={onChangeFunction}
            onClickFunction={onClickFunction}
            taskName={taskName}
            onCloseModal={closeModal}
            modalStatus={modalStatus}
          />
        )}

        <ScrollView style={{ flex: 5 }}>
          {goalsList.map((task) => (
            <GoalItem
              styles={styles}
              item={task}
              removeGoal={setGoalsList}
              goalItems={goalsList}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  heading: {
    fontSize: 24,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },

  pressedItem: {
    opacity: 0.5,
  },

  inputField: {
    borderColor: "#e4d0ff",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#e4d0ff",
    borderStyle: "solid",
    textAlign: "left",
    width: "80%",
    padding: 8,
    marginTop: 8,
  },

  imageContainer: {
    width: 150,
    height: 150,
  },

  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  button: {
    margin: 8,
    width: "25%",
  },

  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b180f0",
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
  },
});
