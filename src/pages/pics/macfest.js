import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function PicsMacfest() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - MacFEST photos</title>
      </Head>
    
      <h1>MacFEST photos</h1>
      <div className={styles.row}>
        <table border="0" cellSpacing="0" cellPadding="5"> 
          <tbody>
            <tr>
              <td><a href="/pics/macfest/2000_1.jpg"><img src="/pics/macfest/2000_1_s.jpg" border="0" width="100" height="100" /></a></td>
              <td><a href="/pics/macfest/2000_2.jpg"><img src="/pics/macfest/2000_2_s.jpg" border="0" width="100" height="100" /></a></td>
            </tr>
          </tbody>
        </table> 

      </div>
    </div>
  )
}
