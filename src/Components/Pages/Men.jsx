import React, { useEffect, useState } from "react";
import styles from "../../styles/Men.module.css";
import OutfitsCard from "../Layouts/OutfitsCard";
import axios from "axios";

const Men = () => {
  let [menOutfits, setMenOutfits] = useState([]);
  useEffect(() => {
    /* fetch("http://localhost:5000/outfit/men")
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          setMenOutfits(data.products);
        });
      })
      .catch((error) => console.log(error)); */
    axios
      .get("http://localhost:5000/outfit/men")
      .then((response) => {
        setMenOutfits(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <section className={styles.barner}>
        <h1>
          Wellcome to <span className={styles.shopname}>famousShopping</span>{" "}
          onLine store
        </h1>
      </section>
      <section className={styles.title}>
        <h2>Men fashions</h2>
      </section>
      <section className={styles.outfitlist}>
        {menOutfits.map((outfit, indice) => {
          return <OutfitsCard indice={indice} />;
        })}
      </section>
    </div>
  );
};

export default Men;
