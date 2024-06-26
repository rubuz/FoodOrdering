import Colors from "@/src/constants/Colors";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import products from "@/assets/data/products";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaultPizzaImage }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  price: { color: Colors.light.tint, fontWeight: "bold" },
  image: { width: "100%", aspectRatio: 1, resizeMode: "cover" },
});
