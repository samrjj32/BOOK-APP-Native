import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
     <Link href="/(auth)/signup">Sign up </Link>
     <Link href="/(auth)">Login</Link>
    </View>
  );
}
