  
import { Upload, Button,Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from "../../styles/Home.module.css";


const UploadComponent = ({  }) => {
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
     
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  return (
    <div className={styles.divB}>
      <Card bordered={false} style={{ width: 170}}>
        <text >Click to upload file</text>        
        <Upload {...props}>
          <Button size="middle" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Card>
    </div>
  );
};

export default UploadComponent;