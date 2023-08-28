import { StyleSheet } from 'react-native';

export const headerStyle = (altura) => StyleSheet.create({
    header: {
      width: "100%",
      height: altura,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
    },
    backButton: {
      position: 'absolute',
      padding: 17,
    },
    goBack: {
      width: 24,
      height: 24,
    },
  });