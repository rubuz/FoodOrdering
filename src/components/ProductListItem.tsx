import Colors from "@/src/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import products from "@/assets/data/products";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  price: { color: Colors.light.tint, fontWeight: "bold" },
  image: { width: "100%", aspectRatio: 1, resizeMode: "cover" },
});
