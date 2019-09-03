import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 5,
    height: 150,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 14
  }
});
export default Card;
