import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Balance = () => {

    return (
            <View style={styles.balanceCard}>
              <Text>Balance</Text>
              <View style={styles.balanceRow}>
                <Text style={styles.textBalance} >$5,750.20</Text>
                <View style={styles.percentBox}>
                  <Text>15%</Text>
                </View>
              </View>
            </View>
    );
};