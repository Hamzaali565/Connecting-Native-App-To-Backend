import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

const EditData = () => {
  const [pic, setPic] = useState(null);
  const launchGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 4],
      // quality: 1,
    });
    if (!result.canceled) {
      // console.log(gImages);
      // let newFile = {
      //   uri: result.assets[0].uri,
      //   type: `${result.assets[0].uri.split(".")[1]}`,
      //   name: `test.${result.assets[0].uri.split(".")[1]}`,
      // };
      setPic(
        // {
        result.assets[0].uri
        // type: `${result.assets[0].uri.split(".")[1]}`,
        // name: `test.${result.assets[0].uri.split(".")[1]}`,
        // }
      );
      handleUpload();
    }
  };

  // const handleUpload = (image) => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "empeloyapp");
  //   data.append("cloud_name", "dozqa9pai");

  //   fetch("https://api.cloudinary.com/v1_1/dozqa9pai/image/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     // .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const handleUpload = () => {
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
          headers: {
            // Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => res.json())
      .then((res) => {
        console.log("from then", res.data);
      })
      .catch((err) => {
        console.log("from catch", err);
      });
  };
  // const LoginData = async (e) => {
  //   e.preventDefault();

  //   let fileInput = document.getElementById("picture");
  //   console.log("fileInput", fileInput.files[0]);
  //   let formData = new FormData();
  //   formData.append("myFiles", fileInput.files[0]);
  //   formData.append("imageUrl", preview);
  //   console.log("imageUrl", preview);
  //   setLoader(true);

  //   axios({
  //     method: "post",
  //     url: `${baseUrl}/send-credentails`,
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then((res) => {
  //       console.log("response Success", res.data);

  //       // console.log(response);
  //       setGetData(!getData);
  //       setOpens(true);
  //       setMtype("success");
  //       setMessages(res.data.message);
  //       setLoader(false);
  //       console.log(preview);
  //       setTimeout(() => {
  //         setEmail("");
  //         setPassword("");
  //         setPreview("");
  //       }, "1000");
  //       //
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setOpens(true);
  //       setMtype("error");
  //       setLoader(false);

  //       // if (
  //       //   err.response.data.message ===
  //       //   "TypeError: Cannot read properties of undefined (reading 'originalname')"
  //       // ) {
  //       //   setMessages("please select an Image");
  //       // } else {
  //       //   setMessages(err.response.data.message);
  //       // }
  //     });
  // };

  return (
    <TouchableOpacity onPress={() => launchGallery()}>
      <View style={{ padding: 20, backgroundColor: "yellow" }}>
        <Text>UPload</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditData;

// import React, { useState } from "react";
// import { Button, Modal, Text, View, StyleSheet, TextInput } from "react-native";
// import AppTextInput from "../components/AppTextInput";
// import Screen from "../components/Screen";
// import { useGalleryAccess } from "../hook/UseGalleryAccess";
// import * as ImagePicker from "expo-image-picker";
// import axios from "axios";

// const EditData = () => {
//   // const [modalVisible, setModalVisible] = useState(false);
//   const [gImages, setGImages] = useState("");
//   useGalleryAccess();
//   const launchGallery = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         // allowsEditing: true,
//         // aspect: [4, 4],
//         // quality: 1,
//         // // base64: true,
//       });
//       if (!result.canceled) {
//         // console.log(gImages);
//         let newFile = {
//           uri: result.assets[0].uri,
//           type: `${result.assets[0].uri.split(".")[1]}`,
//           name: `test.${result.assets[0].uri.split(".")[1]}`,
//         };
//         check(newFile);
//       }
//     } catch (error) {
//       console.log("Error ", error);
//     }
//   };
//   const newlog = () => {
//     console.log(gImages);
//   };
//   const check = (image) => {
//     console.log();
//     const Data = new FormData();
//     Data.append("file", image);
//     Data.append("upload_preset", "nativeapp");
//     Data.append("cloud_name", "dozqa9pai");
//     // console.log(cloudinaryData);
//     axios
//       .post(`https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`, {
//         Data,
//       })
//       .then((res) => res.json())
//       .then(function (response) {
//         console.log("from then", response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   // const handleUpload = (image) => {
//   //   const data = new FormData();
//   //   data.append = ("file", image);
//   //   data.append = ("upload_preset", "nativeapp");
//   //   data.append = ("cloud_name", "dozqa9pai");
//   //   fetch(`https://api.cloudinary.com/v1_1/dozqa9pai/image/upload`, {
//   //     method: "post",
//   //     body: data,
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //     });
//   // };
//   return (
//     <View>
//       <Text onPress={() => launchGallery()}>Hamza</Text>
//       <Button onPress={() => check()} title="ckehs" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 300,
//   },
//   heading: {
//     justifyContent: "center",
//     alignSelf: "center",
//     top: 70,
//     fontSize: 30,
//   },
//   password: {
//     paddingVertical: 20,
//   },
// });
// export default EditData;
// // file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540muhammadhamza565%252FCRUD/ImagePicker/91bb41fa-d8d4-445f-b14d-fe582aed14d0.jpeg
