import TapeList from "@/components/TapeList";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Index() {
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
          {/* <TapeItem
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
          /> */}

          <TapeList />
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
}
