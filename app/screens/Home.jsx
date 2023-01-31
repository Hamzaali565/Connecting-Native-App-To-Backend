import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import React from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import Card from "../components/Card";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});
const Data = [
  {
    email: "hamzaali@gmail.com",
    password: "hamza",
    id: "1",
  },
  {
    email: "hamzakhan@gmail.com",
    password: "hamza",
    id: "2",
  },
  {
    id: "3",
    email: "Muhammmadhamza@gmail.com",
    password: "hamza",
  },
];
const Home = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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

      {/* Data */}
      <View>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card email={item.email} password={item.password} />
          )}
        />
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
  //   Button: {
  //     padding: 10,
  //   },
});
export default Home;
