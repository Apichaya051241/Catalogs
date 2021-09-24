import styles from '../../styles/Home.module.css'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { useRouter } from 'next/router';
import {
   LockOutlined,
   

} from '@ant-design/icons';

export default function Home() {
  const router=useRouter(); 
  return (
    <div className={styles.divE}>
    <div className={styles.login}>
     
     <Input placeholder="Username" prefix={<UserOutlined />} />
     <br></br>
     <Input placeholder="Password" prefix={<LockOutlined />} />
     <br></br>
     <Button type="second"
      onClick={() => router.push("/" )}
                key="/"
                 >Login</Button>
    
    </div>
    </div>
  )
}
