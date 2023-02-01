import { AppRegistry, ScrollView, TextInput } from "react-native";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Home from "./app/screens/Home";
export default function App() {
  return (
    <Screen>
      <ScrollView>
        {/* <AppTextInput name="email" placeholder="Enter your Email" /> */}
        <Home />
        {/* <Card />
        <Card />
        <Card /> */}
        {/* <TextInput placeholder="holder" /> */}
      </ScrollView>
    </Screen>
  );
}

// AppRegistry.registerComponent('Appname', () => App)
