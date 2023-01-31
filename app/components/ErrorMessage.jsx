import React from "react";
import { StyleSheet, Text } from "react-native";
const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.errors}>{error}</Text>;
};
const styles = StyleSheet.create({
  errors: {
    color: "red",
  },
});
export default ErrorMessage;
