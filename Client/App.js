import { AppRegistry, ScrollView, TextInput } from "react-native";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Home from "./app/screens/Home";
import EditData from "./app/screens/EditData";
import Lottie from 'lottie-react-native'
import LottieView from "lottie-react-native";
import Activity from "./app/components/activity";
import LoadAnimation from "./app/screens/LoadAnimation";
// import LottieView from 'lottie-react-native'
export default function App() {
  return (
    <Screen>
      <ScrollView >
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
