import React, { Fragment } from "react";
import clotheImg from "../../asset/clothe.jpg";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <section className={styles.barner}>
        <h1>
          Wellcome to <span className={styles.shopname}>famousShopping</span>{" "}
          onLine store
        </h1>
      </section>
      <section className={styles.branch}>
        <article className={styles.description}>
          <h2> Lorem ipsum dolor sit amet consectetur adipisicing. </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            accusamus, accusantium nostrum vitae itaque dolorem provident!
            Possimus quos laborum fugiat molestias sit nisi eum?
          </p>
        </article>
        <article className={styles.categories}>
          <section className={[styles.men, styles.category].join(" ")}>
            <article className={styles.categoryimg}></article>
            <aside className={styles.categorydesc}></aside>
          </section>
          <section className={[styles.women, styles.category].join(" ")}>
            <article className={styles.categoryimg}></article>
            <aside className={styles.categorydesc}></aside>
          </section>
          <section className={[styles.accessories, styles.category].join(" ")}>
            <article className={styles.categoryimg}></article>
            <aside className={styles.categorydesc}></aside>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Home;
