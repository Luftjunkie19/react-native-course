import { Button, Pressable, Text } from "react-native";

function GoalItem({ styles, item, removeGoal, goalItems }) {
  return (
    <Pressable
      android_ripple={{ color: "rgba(0,0,0,0.75)", borderless: "true" }}
      onPress={() => {}}
      style={styles.taskItem}
      key={item.id}
    >
      <Text style={{ color: "white" }}>{item.content}</Text>

      <Button
        title="Remove X"
        color="red"
        onPress={() => {
          const goals = goalItems.filter((tasks) => tasks.id !== item.id);
          removeGoal(goals);
        }}
      />
    </Pressable>
  );
}

export default GoalItem;
