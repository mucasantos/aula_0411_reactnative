import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
});