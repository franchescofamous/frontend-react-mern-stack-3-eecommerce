import styles from "../../styles/GeneralLayout.module.css";
import { Outlet, Link } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div>
      <header className={styles.nav}>
        <section className={styles.logo}></section>
        <section className={styles.research}></section>
        <section className={styles.menu}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/men"}>Men</Link>
            </li>
            <li>
              <Link href="">Women</Link>
            </li>
            <li>
              <Link href="">Accessories</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </section>
      </header>

      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};

export default GeneralLayout;
