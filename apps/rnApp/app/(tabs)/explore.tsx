import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.continer}>
      <View>
        <Text>테스트뷰</Text>
      </View>
      <WebView
        source={{
          uri: "http://localhost:3000/profileList?isAppMode=true",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 4,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
