import { Button, Image, Modal, TextInput, View } from "react-native";

function GoalInput({
  styles,
  onChangeFunction,
  onClickFunction,
  onCloseModal,
  taskName,
  modalStatus,
}) {
  return (
    <Modal visible={modalStatus} animationType="slide">
      <View style={styles.formContainer}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/Shiba_Inu_coin_logo.png")}
        />

        <TextInput
          style={styles.inputField}
          placeholder="type your goals !"
          value={taskName}
          onChangeText={onChangeFunction}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal !"
              onPress={onClickFunction}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
