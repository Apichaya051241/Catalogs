import styles from '../styles/Home.module.css'
import SearchComponent from './search';
import TabComponent from './tab';
 
const HeadComponent = ({ }) => {

  return (
    (<div className={styles.divA}></div>),
    (
      <head className={styles.header}>
        <div className={styles.div}>
          <SearchComponent />
          <TabComponent />
        </div>
      </head>
    )
  );
};

export default HeadComponent;
