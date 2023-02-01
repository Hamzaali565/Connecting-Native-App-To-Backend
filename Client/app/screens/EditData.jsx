import React, { useState } from "react";
import { Button, Modal, Text, View, StyleSheet, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { useGalleryAccess } from "../hook/UseGalleryAccess";

const EditData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gImages, setGImages] = useState();
  useGalleryAccess();
  const launchGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setGImages(result.assets[0].uri);
      console.log(gImages);
    } catch (error) {
      console.log("Error ", error);
    }
  };
  const check = () => {
    console.log();
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", pic);
    cloudinaryData.append("upload_preset", "postingApp");
    cloudinaryData.append("cloud_name", "dozqa9pai");
    // console.log(cloudinaryData);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`,
        cloudinaryData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then(async (res) => {
        console.log("from then", res.data);
      });
  };

  return (
    <View>
      <Text onPress={() => launchGallery()}>Hamza</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 300,
  },
  heading: {
    justifyContent: "center",
    alignSelf: "center",
    top: 70,
    fontSize: 30,
  },
  password: {
    paddingVertical: 20,
  },
});
export default EditData;
