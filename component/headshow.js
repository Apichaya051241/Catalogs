import styles from "../styles/Home.module.css";
import { Button } from "antd";
import { useRouter } from "next/router";

const HeadshowComponent = ({ }) => {
    
    const router = useRouter();

    return (
      <head >
        <Button                
          color="blue"
          shape="round"
          defaultSelectedKeys={[router.pathname]}
          onClick={() => router.push("/")}
          key="/"
          padding="1rm"
        >
          Home
        </Button>
      </head>
    );
};

export default HeadshowComponent;
