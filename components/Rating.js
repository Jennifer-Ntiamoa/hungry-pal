import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import Card from "./Card";

export default function Rating({ navigation }) {
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
      <ScrollView style={styles.container} vertical showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.starContainer}>
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={colors.primary}
          />
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={colors.primary}
          />
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={colors.primary}
          />
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={colors.primary}
          />
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.rating}>5.0</Text>
        </View>

        <View>
          <Text style={styles.feedback}>Cutomer Feedback</Text>
        </View>
        <Card
          title={"Superb"}
          subtitle={"The fries were crisp and well fried"}
          bottom={"by Efya"}
        />
        <Card
          title={"Meh"}
          subtitle={"The soup wasn’t spicy and had less meat in it"}
          bottom={"by User24363892"}
        />
        <Card
          title={"Good"}
          subtitle={"The Jollof tasted well"}
          bottom={"by Jenny"}
        />
        <Card
          title={"Tasty"}
          subtitle={"The Fish was fresh not too dry"}
          bottom={"by Akos"}
        />
        <Card
          title={"Nope"}
          subtitle={"I’ll rate the waakye a 5/10 because it was too salty"}
          bottom={"by User87654327809"}
        />
        <Card
          title={"Not Okay"}
          subtitle={
            "I ordered seafood noodles and i was given noodles with egg"
          }
          bottom={"by Isaac"}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
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
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  starContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  rating: {
    fontWeight: "900",
    fontSize: 20,
    marginLeft: 7,
  },
  feedback: { margin: 15, fontSize: 15, color: colors.textDark },

  //<View>
  //<Text Input></Text>
  //</View>
});
