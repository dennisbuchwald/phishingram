import styles from "../styles/ResetPassword.module.css";
import Header from "../components/Header";

const ResetPassword = () => {
  return (
    <>
      <Header />
      <div class="reset-password-box">
        <div className={styles.container}>
          <img
            src="/instagram-key.png"
            alt="Beschreibung"
            className={styles.imageBox}
          />

          <h1 className={styles.title}>Probleme beim Anmelden?</h1>
          <p className={styles.description}>
            Gib deine E-Mail-Adresse, deine Telefonnummer oder deinen
            Benutzernamen ein, damit wir dir einen Link senden können, mit dem
            du zurück in dein Konto gelangst.
          </p>
          <form className={styles.form}>
            <label className={styles.label}>
              <input
                type="text"
                className={styles.input}
                placeholder="E-Mail, Telefon oder Benutzername"
              />
            </label>
            <button type="submit" className={styles.button}>
              Link zum Anmelden senden
            </button>
          </form>
          <a href="#" className={styles.link}>
            Du kannst dein Passwort nicht zurücksetzen?
          </a>
          <div className={styles.orContainer}>
            <div className={styles.orLine}></div>
            <div className={styles.orText}>ODER</div>
            <div className={styles.orLine}></div>
          </div>
          <a href="#" className={styles.link}>
            Neues Konto erstellen
          </a>
          <a href="#" className={styles.link}>
            Zurück zur Anmeldung
          </a>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
