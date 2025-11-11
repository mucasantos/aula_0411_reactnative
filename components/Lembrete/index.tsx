import { Text, View } from 'react-native';

import { styles } from './styles';

export const Lembrete = () => {
    return (

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
    );
}