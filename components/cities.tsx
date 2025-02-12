import { CityProps, City } from "../app/city-page";

const Calgary = () => {
  return (
    <City
      cityName="Calgary"
      image="../assets/calgary-image.jpg"
      website="https://www.calgary.ca/home.html"
    />
  );
};

const Edmonton = () => {
  return (
    <City
      cityName="Edmonton"
      image="../assets/edmonton-image.jpg"
      website="https://www.edmonton.ca/"
    />
  );
};

export { Calgary, Edmonton };

// Calgary Image sourced from Unsplash
// https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-n4mvQ1YWk1U

// Edmonton Image sourced from Unsplash
// https://unsplash.com/photos/aerial-photography-of-city-with-high-rise-buildings-under-blue-and-white-sky-during-night-time-u2tSj5H3rXQ
