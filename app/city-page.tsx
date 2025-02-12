import { View, Image, Text, Linking } from "react-native";
import { useState } from "react";
import { Calgary } from "../components/cities";
import { Edmonton } from "../components/cities";

type CityProps = {
  cityName: string;
  image: any;
  website: string;
};

const City = ({ cityName, image, website }: CityProps) => {
  return (
    <View>
      <Image source={{ uri: image }} />
      <Text>{cityName}</Text>
      <Text onPress={() => Linking.openURL(website)}>
        Visit their website here
      </Text>
    </View>
  );
};

export { CityProps, City };

export default function CityView(title: string) {
  const [isCalgary, setCalgary] = useState(false);

  if (title === "Calgary") {
    setCalgary(true);
  }

  if (title === "Edmonton") {
    setCalgary(false);
  }

  return <View>{isCalgary ? Calgary() : Edmonton()}</View>;
}
