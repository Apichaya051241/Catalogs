  
import { Input } from 'antd';
import styles from "../styles/Home.module.css";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";


const SearchComponent = ({  }) => {
 
  const { Search } = Input;
  const onSearch = value => console.log(value);
  
  return (
    <div>
      <h1 className={styles.h1}>CATALOG PRODUCT</h1>,
      <Search
        className={styles.search}
        placeholder="Search Sku..."
        onSearch={onSearch}
        size="large"
        
      />
      
    </div>
  );
};

export default SearchComponent;