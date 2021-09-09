import styles from '../styles/Home.module.css'
import { Content } from 'antd/lib/layout/layout';
import ListComponent from '../component/list';
import HeadComponent from '../component/header';
import { Row } from 'antd';
import FooterComponent from '../component/footer';


export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Content >       
        <Content>
          <ListComponent />
        </Content>
      </Content>
      <FooterComponent />
    </div>
  );
}
