import { Feather } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

export const ActionBtn = () => {
  return (
   <View style={styles.acoes}>
           <TouchableOpacity style={[styles.botao, styles.botaoAzul]}>
             <Feather name="arrow-up-right" size={20} color="#fff" />
             <Text style={styles.textoBotao}>Enviar</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={[styles.botao, styles.botaoVermelho]}>
             <Feather name="arrow-down-left" size={20} color="#fff" />
             <Text style={styles.textoBotao}>Receber</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style={styles.botaoMais}>
             <Feather name="more-horizontal" size={24} color="#333" />
           </TouchableOpacity>
         </View>
  );
}