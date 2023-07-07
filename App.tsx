import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type ValueProps = {
  label: string;
  value: string;
};

const WatchDataBox = ({ label, value }: ValueProps) => (
  <View style={styles.valueContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 25, flexWrap: "wrap" }}>
        <WatchDataBox label="Steps" value="1231" />
        <WatchDataBox label="Distance" value="2.4 mi" />
      </View>

      <WatchDataBox label="Flights" value="29" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 10,
  },
  valueContainer: {
    minWidth: "40%",
  },
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: "#afb3be",
    fontWeight: "500",
  },
});
