import City from "../app/city-page";
import React from "react";


export function Calgary() {
    return (
        <City
            cityName="Calgary"
            //image="require('../assets/calgary-image.jpg')"
            image={require('../assets/calgary-image.jpg')}
            //image ="https://upload.wikimedia.org/wikipedia/commons/b/bb/Downtown_Calgary_2020-4.jpg"
            website="https://www.calgary.ca/home.html"
        />
    )
}

export function Edmonton() {
    return (
        <City
            cityName="Edmonton"
            //image={require('../assets/edmonton-image.jpg')}
            image={require('../assets/edmonton-image.jpg')}
            website="https://www.edmonton.ca/"
            />
    )
}
// Calgary Image sourced from Unsplash
// https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-n4mvQ1YWk1U

// Edmonton Image sourced from Unsplash
// https://unsplash.com/photos/aerial-photography-of-city-with-high-rise-buildings-under-blue-and-white-sky-during-night-time-u2tSj5H3rXQ