import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"green"} />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Loading;
