import React from "react";
import { StyleSheet, View, WebView } from "react-native";

const WebViewExample = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.openai.com" }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewExample;
