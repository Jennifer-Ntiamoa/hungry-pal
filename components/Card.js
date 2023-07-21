import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";

export default function Rating({ title, subtitle, bottom }) {
  return (
    <View style={styles.container}>
      {/* card component */}
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.subtitle}>{bottom}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 8,
  },
  card: {
    width: "100%",
    padding: 8,
    height: 100,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: colors.white,
    borderWidth:1,
    borderColor:colors.textDark,
    color:colors.textDark,
    // marginHorizontal: 15,
  },
  title:{
    fontWeight: "700",
  },
  subtitle: {
    color:colors.textDark,
    fontWeight: "400",
  },
  cardTop:{
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
    marginBottom: 10,
  },
  cardBottom:{
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 10,
  },
});
