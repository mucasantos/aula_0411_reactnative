import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const transactions = [
    {
      id: '1',
      title: '🍔',
      describe: 'Food & Drink',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '1',
      title: '⚽',
      describe: 'Sports',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '1',
      title: '👙',
      describe: 'Shopping',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
    {
      id: '1',
      title: '✈️',
      describe: 'Travel',
      prime: '$15.40',
      time: '10/10/2022 06:27',
    },
  ];


  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo} >TK</Text>
        <Feather name="cloud-rain" size={22} color="blue" />
      </View>
      {/* Card Marelo */}

      <View style={styles.balanceCard}>
        <Text>Balance</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.textBalance} >$5,750.20</Text>
          <View style={styles.percentBox}>
            <Text>15%</Text>
          </View>
        </View>
      </View>
      {/* Botoes */}

      {/* BOTÕES */}
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

      {/* LEMBRETE */}
      <View style={styles.lembrete}>
        <View style={styles.lembreteCabecalho}>
          <Text style={styles.lembreteTitulo}>Lembrete</Text>
          <Text style={styles.verTudo}>Ver todos</Text>
        </View>

        <View style={styles.lembreteItem}>

          <View>
            <Text style={styles.lembreteNome}>Pagar cabelereiro</Text>
            <Text style={styles.lembreteData}>10/11/2025 12:00</Text>
          </View>
          <Text style={styles.lembreteValor}>R$ 55,00</Text>
        </View>
      </View>


      {/* Card Remind */}

      {/* Transactions List */}
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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  // BOTÕES
  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  botaoAzul: {
    backgroundColor: '#007BFF',
  },
  botaoVermelho: {
    backgroundColor: '#FF5C77',
  },
  botaoMais: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    elevation: 2,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // LEMBRETE
  lembrete: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  lembreteCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  lembreteTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verTudo: {
    color: '#007BFF',
  },
  lembreteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  lembreteNome: {
    fontWeight: 'bold',
  },
  lembreteData: {
    fontSize: 12,
    color: '#666',
  },
  lembreteValor: {
    color: '#E63946',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6AFF",
  },
  balanceCard: {
    backgroundColor: "#e7c65cff",
    borderRadius: 16,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBalance: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 8,
  },
  percentBox: {
    backgroundColor: "#ffffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,

  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#c5c1c1ff",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
  },
  icons: {
    fontSize: 36,
  },
})
