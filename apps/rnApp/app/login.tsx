import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>로그인</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
