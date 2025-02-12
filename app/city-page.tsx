import { View, Image, Text, Linking, StyleSheet } from 'react-native';
import InterestingStuff from './interesting';

type CityProps = {
    cityName: string;
    image: any;
    website: string;
    commentArg: string;
}

export default function City({ cityName, image, website, commentArg}: CityProps) {
    return (
        <View>
            <Image style = {{height: 300, width: '100%'}} source={image} />
            
            <Text>{cityName}</Text>
            <Text onPress={() => Linking.openURL(website)}>Visit their website here</Text>
            <InterestingStuff comment = {commentArg}/>
        </View>
    )
}
