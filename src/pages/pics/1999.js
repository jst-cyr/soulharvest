import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Pics1999() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - 1999</title>
      </Head>
    
      <h1>1999</h1>
      <div className={styles.row}>
        <table border="0" cellSpacing="0" cellPadding="5"> 
          <tbody>
            <tr>
              <td><a href="/pics/1999/gloucester1.jpg"><img src="/pics/1999/gloucester1_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/1999/zaphod1.jpg"><img src="/pics/1999/zaphod1_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/1999/zaphod2.jpg"><img src="/pics/1999/zaphod2_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/1999/zaphod3.jpg"><img src="/pics/1999/zaphod3_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/1999/zaphod4.jpg"><img src="/pics/1999/zaphod4_s.jpg" border="0" width="100" height="100" /></a></td>
            </tr>
          </tbody>
        </table> 

      </div>
    </div>
  )
}
