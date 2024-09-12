import React from "react";
import styles from "../../styles/OutfitsCard.module.css";

const OutfitsCard = ({ indice }) => {
  return <section className={styles.outfitscard} key={indice}></section>;
};

export default OutfitsCard;
