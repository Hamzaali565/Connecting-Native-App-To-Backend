import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
const Activity = ({ visible = false, style }) => {
  if (!visible) return null;
  return (
    <LottieView
      loop={true}
      autoPlay={true}
      style={[styles.anime, style]}
      source={require("../../lottie/ripple.json")}
    />
  );
};
const styles = StyleSheet.create({
  anime: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Activity;
