import Head from 'next/head';
import Script from 'next/script';
import styles from '../../styles/soulharvest.module.css';

export default function Gigs() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Gigs</title>
        <Script language="javascript" src="/scripts/popup.js" />
      </Head>

      <h1>Gigs</h1>
      <div className={styles.row}>
      </div>
    </div>
  )
}
