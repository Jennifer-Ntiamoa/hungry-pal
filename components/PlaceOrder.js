import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import colors from "../assets/colors/colors";

export default function PlaceOrder({ navigation }) {
  const cancelOrder = () => {
    alert("Order successfully cancelled!");
    navigation.push("Home");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/bg.png")}
      resizeMode="cover"
    >
      <View>
        <View>
          <ActivityIndicator size="small" color="#0000ff" />

          <TouchableOpacity style={styles.button} onPress={cancelOrder}>
            <Text style={{ color: colors.primary }}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderColor: colors.primary,
    borderWidth: 1,
    elevation: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginVertical: 15,
    height: 45,
  },
});
