import tape from "@/data/tapesData";
import React from "react";
import { StyleSheet, View } from "react-native";
import TapeItem from "./tapeItem";

const TapeList = () => {
  const tapeList = tape.map((tapeItem, index) => {
    return <TapeItem tape={tapeItem} key={index} />;
  });
  return <View>{tapeList}</View>;
};

export default TapeList;

const styles = StyleSheet.create({});
