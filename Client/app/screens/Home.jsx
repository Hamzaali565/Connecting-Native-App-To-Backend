import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  Image,
  Modal,
  Text,
  FlatList,
  Alert,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import Card from "../components/Card";
import axios from "axios";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});
//
let baseUrl = "https://native-server-production.up.railway.app";
// if (window.location.href.split(":")[0] === "http") {
//   baseUrl = "http://192.168.18.175:5001";
// }
const Home = () => {
  const [data, setData] = useState([]);
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editID, setEditID] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [pageLoad, setPageLoad] = useState(false);

  const getAllDAta = async () => {
    const call = axios
      .get(`${baseUrl}/datas`)
      .then(function (response) {
        setData(response.data.data.reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllDAta();
  }, [pageLoad]);

  const Post = async (email, password) => {
    const call = axios
      .post(`${baseUrl}/send-data`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        setPageLoad(!pageLoad);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const DeletePost = async (id) => {
    // const myFormik = useFormik();
    const call = axios
      .delete(`${baseUrl}/delete/${editID}`)
      .then(function (response) {
        console.log(response.data);
        setPageLoad(!pageLoad);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const Ask = () => {
    Alert.alert("Warning", "Are You Sure", [
      { text: "Yes", onPress: () => DeletePost() },
      { text: "No" },
    ]);
  };
  const Update = async (id) => {
    // const myFormik = useFormik();
    const call = axios
      .put(`${baseUrl}/edit/${editID}`, {
        email: editEmail,
        password: editPassword,
      })
      .then(function (response) {
        console.log(response.data);
        setPageLoad(!pageLoad);
      })
      .catch(function (error) {
        console.log(error);
      });
    setModalVisible(false);
  };
  const EditData = (id) => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // setEmail(values.email);
          // setPassword(values.password);
          Post(values.email, values.password);
          // console.log(user);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <>
            <AppTextInput
              name="email"
              placeholder="Enter Email"
              style={styles.email}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              name="lock"
              placeholder="Enter Password"
              style={styles.password}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <View style={styles.button}>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Card
              email={item.email}
              password={item.password}
              onEdit={() => {
                EditData(item._id);
                setEditEmail(item.email);
                setEditID(item._id);
                setEditPassword(item.password);
              }}
              onDelete={() => {
                setEditID(item._id);
                Ask();
              }}
            />
          )}
        />
      </View>

      <View>
        <Modal visible={modalVisible} animationType={"fade"}>
          <Text style={styles.heading}>Edit Your Data</Text>
          <View style={styles.container2}>
            <AppTextInput
              placeholder="enter your new Email"
              value={editEmail}
              onChangeText={(text) => setEditEmail(text)}
            />
            <View style={styles.password2}>
              <AppTextInput
                placeholder="enter your new Password"
                value={editPassword}
                onChangeText={(text) => setEditPassword(text)}
              />
            </View>
            <View style={styles.update}>
              <Button
                title="Update"
                onPress={() => {
                  Update();
                }}
              />
            </View>
            <View>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  password: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  container2: {
    justifyContent: "center",
    // flexDirection: "row",
    // alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 200,
  },
  heading: {
    justifyContent: "center",
    alignSelf: "center",
    top: 70,
    fontSize: 30,
  },
  password2: {
    paddingVertical: 20,
  },
  update: {
    paddingBottom: 10,
  },
  anime: {
    // top: 20,
  },
});
export default Home;
// const Data = [
//   {
//     email: "hamzaali@gmail.com",
//     password: "hamza",
//     id: "1",
//   },
//   {
//     email: "hamzakhan@gmail.com",
//     password: "hamza",
//     id: "2",
//   },
//   {
//     id: "3",
//     email: "Muhammmadhamza@gmail.com",
//     password: "hamza",
//   },
// ];
