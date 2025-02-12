import {Text, View} from "react-native";

type InterestingProp = {
    comment: string;
};

export default function InterestingStuff ({comment}:InterestingProp) {
        return (
        <View>
            <Text>{comment}</Text>
        </View>
    )
}