import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useRouter } from "expo-router";

//import  constants
import colors from "@/constants/colors";
import styles from "@/constants/styles";


export default function Index()
{

  const router = useRouter();

  const onAddCustomer = () =>
  {
    router.push("/add");
  }

  const onAllCustomers = () =>
  {
    router.push("/AllCustomers")
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View>
        <Text style={styles.h1}>Customer Capture</Text>
      </View>
      <View style={styles.cardGroup}>
        <TouchableOpacity style={styles.cardContainer} onPress={onAddCustomer}>
          <View style={styles.cardHeader}>
            <Ionicons name="add-circle-outline" size={24} color={colors.white} />
            <Text style={styles.cardHeaderText}>Add New Customer</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={onAllCustomers}>
          <View style={styles.cardHeader}>
            <Ionicons name="eye" size={24} color={colors.white} />
            <Text style={styles.cardHeaderText}>View All Customers</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
