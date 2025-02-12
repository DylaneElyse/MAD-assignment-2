import City from "../../components/city-page";

export default function Edmonton() {
    return (
        <City
            cityName="Edmonton"
            image={require('../../assets/edmonton-image.jpg')}
            website="https://www.edmonton.ca/"
            />
    )
}