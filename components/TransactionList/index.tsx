import React from "react";
import {
    FlatList,
    Text,
    View
} from "react-native";

import { styles } from "./styles";

export const TransactionList = () => {



  const transactions = [
    {
      id: '1',
      title: '🍔',
      describe: 'Food & Drink',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '2',
      title: '⚽',
      describe: 'Sports',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '3',
      title: '👙',
      describe: 'Shopping',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '4',
      title: '✈️',
      describe: 'Travel',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
  ];

    return(

         <FlatList

        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.icons} >{item.title}</Text>
            <Text>{item.time}</Text>
            <Text>${item.prime}</Text>
          </View>
        )}

      />
    );
}

