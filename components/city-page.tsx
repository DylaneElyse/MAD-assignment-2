import { View, Image, Text, Linking, StyleSheet } from 'react-native';

type CityProps = {
    cityName: string;
    image: any;
    website: string;
}

export default function City({ cityName, image, website}: CityProps) {
    return (
        <View>
            <Image
            style = {{height: 300, width: '100%'}}
            source={image}/>
            <Text>{cityName}</Text>
            <Text onPress={() => Linking.openURL(website)}>Visit their website here</Text>
        </View>
    )
}