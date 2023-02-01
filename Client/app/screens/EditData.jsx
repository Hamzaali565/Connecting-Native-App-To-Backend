import React, { useState } from "react";
import { Button, Modal, Text, View, StyleSheet, TextInput } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { useGalleryAccess } from "../hook/UseGalleryAccess";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const EditData = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [gImages, setGImages] = useState("");
  useGalleryAccess();
  const launchGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        // aspect: [4, 4],
        // quality: 1,
        // // base64: true,
      });
      if (!result.canceled) {
        // console.log(gImages);
        let newFile = {
          uri: result.assets[0].uri,
          type: `${result.assets[0].uri.split(".")[1]}`,
          name: `test.${result.assets[0].uri.split(".")[1]}`,
        };
        check(newFile);
      }
    } catch (error) {
      console.log("Error ", error);
    }
  };
  const newlog = () => {
    console.log(gImages);
  };
  const check = (image) => {
    console.log();
    const Data = new FormData();
    Data.append("file", image);
    Data.append("upload_preset", "nativeapp");
    Data.append("cloud_name", "dozqa9pai");
    // console.log(cloudinaryData);
    axios
      .post(`https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`, {
        Data,
      })
      .then((res) => res.json())
      .then(function (response) {
        console.log("from then", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const handleUpload = (image) => {
  //   const data = new FormData();
  //   data.append = ("file", image);
  //   data.append = ("upload_preset", "nativeapp");
  //   data.append = ("cloud_name", "dozqa9pai");
  //   fetch(`https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`, {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  return (
    <View>
      <Text onPress={() => launchGallery()}>Hamza</Text>
      <Button onPress={() => check()} title="ckehs" />
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
// file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540muhammadhamza565%252FCRUD/ImagePicker/91bb41fa-d8d4-445f-b14d-fe582aed14d0.jpeg
