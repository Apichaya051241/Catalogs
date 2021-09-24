import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "../styles/Home.module.css";

const TabComponent = ({}) => {
  const props = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
      console.log("Your upload file:", file);

      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  return (   
    <Upload {...props}>
      <Button
        className={styles.uploadbotton}
        icon={<UploadOutlined />}
        shape="round"
        size="middle"
      >
        Upload
      </Button>
      </Upload>     
  );
};

export default TabComponent;
