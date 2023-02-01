import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Card = ({ email, password, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageAndButton}>
        <Image source={require("../Images/profile.jpg")} style={styles.Image} />
        <View style={styles.icons}>
          <TouchableOpacity onPress={onEdit}>
            <MaterialCommunityIcons name="pencil" size={25} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <MaterialCommunityIcons
              name="delete"
              size={25}
              color="red"
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.credentials}>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{password}</Text>
      </View>
      <Image
        source={require("../Images/profile.jpg")}
        style={{ resizeMode: "cover", width: "100%", borderRadius: 10 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  credentials: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    // backgroundColor: "gray",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderColor: "red",
    borderWidth: 10,
    marginVertical: 10,
  },
  email: {
    fontSize: 20,
  },
  Image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  icons: {
    flexDirection: "row",
  },
  imageAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Card;
