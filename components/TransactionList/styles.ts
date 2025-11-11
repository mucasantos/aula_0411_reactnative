import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

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
});