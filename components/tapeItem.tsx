import tape from "@/data/tapesData";
import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

const TapeItem = () => {
  let tape1 = tape[0];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        padding: 10,
        // backgroundColor: "red",
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "grey",
      }}
    >
      <Image
        source={{
          uri: tape1.tapeImage,
        }}
        style={{ width: 150, height: 150, padding: 10, borderRadius: 15 }}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          {tape1.tapeTitle}
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
              fontSize: 16,
              padding: 10,
            }}
          >
            {tape1.tapeDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TapeItem;

const styles = StyleSheet.create({});
