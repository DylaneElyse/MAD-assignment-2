import City from "../app/city-page";
import React from "react";


export function Calgary() {
    return (
        <City
            cityName="Calgary"
            image={require('../assets/calgary-image.jpg')}
            website="https://www.calgary.ca/home.html"
            commentArg = "There are tons of interesting stuff about Calgary, such as ..."
        />
    )
}

export function Edmonton() {
    return (
        <City
            cityName="Edmonton"
            image={require('../assets/edmonton-image.jpg')}
            website="https://www.edmonton.ca/"
            commentArg = "There are tons of interesting stuff about Edmonton, such as ..."
            />
    )
}
// Calgary Image sourced from Unsplash
// https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-n4mvQ1YWk1U

// Edmonton Image sourced from Unsplash
// https://unsplash.com/photos/aerial-photography-of-city-with-high-rise-buildings-under-blue-and-white-sky-during-night-time-u2tSj5H3rXQ
