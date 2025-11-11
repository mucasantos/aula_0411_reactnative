import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (

      <View style={styles.header}>
        <Text style={styles.logo} >TK</Text>
        <Feather name="cloud-rain" size={22} color="blue" />
      </View>

  );
};