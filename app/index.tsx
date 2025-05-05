import TapeItem from "@/components/tapeItem";
import tape from "@/data/tapesData";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Index() {
  let tape1 = tape[0];
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <GestureHandlerRootView>
        <ScrollView>
          <TapeItem />
          <TapeItem />
          <TapeItem />
          <TapeItem />
          <TapeItem />
          <TapeItem />
          <TapeItem />
          <TapeItem />
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
}
