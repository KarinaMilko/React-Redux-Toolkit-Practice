import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./Page.module.sass";

function Page() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.pageMain}>
        <Outlet />
      </main>
    </div>
  );
}

export default Page;
