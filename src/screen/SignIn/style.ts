import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.background
    },
    Image: {
        width: '100%',
        height: '360',
    },
    content: {
        marginTop: -40,
        
    },
    title: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: '40',
        marginBottom: '16',
    },
    subtitle: {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center';
        marginBotton: 64,
    },
});