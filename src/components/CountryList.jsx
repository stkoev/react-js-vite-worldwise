import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  if (!countries.length)
    return (
      <Message message="Add your first country by clicking on a city on the map" />
    );

  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </ul>
  );
}

export default CountryList;
