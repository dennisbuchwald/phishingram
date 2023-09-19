import styles from "./page.module.css";
import ResetPassword from "../pages/resetPassword"; // Import the ResetPassword component

export default function Home() {
  return (
    <main className={styles.main}>
      <ResetPassword />
    </main>
  );
}
