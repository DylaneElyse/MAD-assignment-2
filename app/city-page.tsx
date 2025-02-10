import { View, Image, Text, Linking, StyleSheet } from 'react-native';

type CityProps = {
    cityName: string;
    image: string;
    website: string;
}

export default function City({ cityName, image, website}: CityProps) {
    return (
        <View>
            <Image source={{ uri: image }} />
            <Text>{cityName}</Text>
            <Text onPress={() => Linking.openURL(website)}>Visit their website here</Text>
        </View>
    )
}