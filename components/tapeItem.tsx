import tape from "@/data/tapesData";
import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

interface TapeItemProps {
  tapeTitle: string;
  tapeDescription: string;
  tapeImage: string;
}
const TapeItem = ({ tapeTitle, tapeDescription, tapeImage }: TapeItemProps) => {
  let tape1 = tape[0];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // marginTop: 10,
        padding: 10,
        // backgroundColor: "red",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "grey",
      }}
    >
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Image
          source={{
            uri: tapeImage,
          }}
          style={{
            width: 150,
            height: 150,
            padding: 10,
            borderRadius: 15,
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          width: 240,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          {tapeTitle}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            height: 110,
            width: 240,
            // backgroundColor: "blue",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              padding: 10,
            }}
          >
            {tapeDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TapeItem;

const styles = StyleSheet.create({});
