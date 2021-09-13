import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const TabComponent = ({}) => {   

    const router = useRouter();  
  return (   
    <a 
        className={styles.text}
        onClick={() => router.push("/upload/upload")} >
        Upload File
      </a>    
  );
};

export default TabComponent;

