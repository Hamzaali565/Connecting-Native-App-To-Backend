import { AppRegistry, ScrollView, TextInput } from "react-native";
import Screen from "./app/components/Screen";
import EditData from "./app/screens/EditData";
import Home from "./app/screens/Home";

// import LottieView from 'lottie-react-native'
export default function App() {
  return (
    <Screen>
      <ScrollView>
        {/* <AppTextInput name="email" placeholder="Enter your Email" /> */}
        <Home />
        {/* <LoadAnimation /> */}
        {/* <Activity visible={true} /> */}
        {/* <EditData /> */}
      </ScrollView>
    </Screen>
  );
}

// AppRegistry.registerComponent('Appname', () => App)
