import styles from '../styles/Home.module.css'
import SearchComponent from './search';



  
 
const HeadComponent = ({  }) => {
    
  return (
    <head className={styles.header}>
      <div className={styles.div}>
        <SearchComponent />
      </div>
    </head>
  );
};

export default HeadComponent;
