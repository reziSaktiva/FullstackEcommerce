import { Image, Card, Heading, Text } from "@/components/gluestackUi";
import { Link } from "expo-router";
import { Pressable } from "react-native";

interface ProductListItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
}

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/products/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg flex-1">
          <Image
            source={{
              uri: product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md"
            alt={`${product.name} image`}
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <Heading size="md" className="mb-4">
            {product.price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
