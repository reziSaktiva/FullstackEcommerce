import {
  Image,
  Card,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  ButtonText,
} from "@/components/gluestackUi";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/products.json";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box className="flex-1 items-center p-3">
      <Card className="p-5 rounded-lg max-w-[960px] flex-1">
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.price}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            {product.name}
          </Heading>
          <Text size="sm">{product.description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
