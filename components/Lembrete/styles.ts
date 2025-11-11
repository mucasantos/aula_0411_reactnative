import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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


});