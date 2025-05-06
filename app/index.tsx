import TapeItem from "@/components/tapeItem";
import tape from "@/data/tapesData";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Index() {
  let tape1 = tape[0];
  let tape2 = tape[1];
  let tape3 = tape[2];
  let tape4 = tape[3];

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <GestureHandlerRootView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TapeItem
            tapeTitle={tape1.tapeTitle}
            tapeImage={tape1.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape2.tapeTitle}
            tapeImage={tape2.tapeImage}
            tapeDescription={tape2.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape3.tapeTitle}
            tapeImage={tape3.tapeImage}
            tapeDescription={tape3.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape4.tapeTitle}
            tapeImage={tape4.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape1.tapeTitle}
            tapeImage={tape1.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape2.tapeTitle}
            tapeImage={tape2.tapeImage}
            tapeDescription={tape2.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape3.tapeTitle}
            tapeImage={tape3.tapeImage}
            tapeDescription={tape3.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape4.tapeTitle}
            tapeImage={tape4.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape1.tapeTitle}
            tapeImage={tape1.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape2.tapeTitle}
            tapeImage={tape2.tapeImage}
            tapeDescription={tape2.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape3.tapeTitle}
            tapeImage={tape3.tapeImage}
            tapeDescription={tape3.tapeDescription}
          />
          <TapeItem
            tapeTitle={tape4.tapeTitle}
            tapeImage={tape4.tapeImage}
            tapeDescription={tape1.tapeDescription}
          />
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
}
