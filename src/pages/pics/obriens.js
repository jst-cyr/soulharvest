import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function PicsOBriens() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - O'Briens</title>
      </Head>
    
      <h1>O'Briens</h1>
      <div className={styles.row}>
        <table border="0" cellSpacing="0" cellPadding="5"> 
          <tbody>
            <tr>
              <td><a href="/pics/obriens/14-apr-2001_01.jpg"><img src="/pics/obriens/14-apr-2001_01_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_06.jpg"><img src="/pics/obriens/14-apr-2001_06_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_03.jpg"><img src="/pics/obriens/14-apr-2001_03_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_04.jpg"><img src="/pics/obriens/14-apr-2001_04_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_08.jpg"><img src="/pics/obriens/14-apr-2001_08_s.jpg"  border="0" width="100" height="100" /></a></td>
            </tr>
            <tr>
              <td><a href="/pics/obriens/14-apr-2001_02.jpg"><img src="/pics/obriens/14-apr-2001_02_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_07.jpg"><img src="/pics/obriens/14-apr-2001_07_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_09.jpg"><img src="/pics/obriens/14-apr-2001_09_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/obriens/14-apr-2001_05.jpg"><img src="/pics/obriens/14-apr-2001_05_s.jpg"  border="0" width="100" height="100" /></a></td>
              <td></td>
            </tr>
          </tbody>
        </table> 

      </div>
    </div>
  )
}
