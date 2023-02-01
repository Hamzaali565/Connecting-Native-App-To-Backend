import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({
  name,
  placeholder,
  onChangeText,
  style,
  onBlur,
  value,
}) => {
  return (
    <View style={[styles.field, style]}>
      {name && <MaterialCommunityIcons name={name} color="gray" size={25} />}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    borderColor: "Black",
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
});

export default AppTextInput;
