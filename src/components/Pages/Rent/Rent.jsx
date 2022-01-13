import styles from "./Rent.module.scss";
import Navbar from "../../Navbar/Navbar";
import Card from "../../Card/Card";
import { useQuery } from "@apollo/client";
import { RENT_CARDS } from "../../../utils/Queries";

const Rent = () => {
  const { loading, data, error } = useQuery(RENT_CARDS);

  return (
    <main>
      <Navbar />

      <div className={styles.content}>
        <h1>Houses for Rent</h1>

        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: "#333" }}>Loading...</h1>
          ) : (
            <div className={styles.card}>
              {data.houses.data.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: house.id,
                    category: "Rent",
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city: `${house.attributes.location.data.attributes.City}`,
                    neighborhood: `${house.attributes.Neighborhood}`,
                    street: `${house.attributes.Street}`,
                    rooms: `${house.attributes.Rooms}`,
                    bedrooms: `${house.attributes.Bedrooms}`,
                    bathrooms: `${house.attributes.Bathrooms}`,
                    shortAddress: `${house.attributes.Short_Address}`,
                    price: `${house.attributes.Price}`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Rent;
