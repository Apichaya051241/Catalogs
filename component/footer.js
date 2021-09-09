
import styles from "../styles/Home.module.css";
import UploadComponent from "./upload";

const FooterComponent = () => {
  
  return (
    <footer className={styles.footer}>     
      {/* <div className={styles.diva}> */}
       <UploadComponent/>
      {/* </div> */}
    </footer>
  );
};

export default FooterComponent;
