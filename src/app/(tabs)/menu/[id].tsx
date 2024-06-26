import { Text } from "react-native";
import { View } from "../../../components/Themed";
import { useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text>Product Details for id: ${id}</Text>
    </View>
  );
};
export default ProductDetailsScreen;
