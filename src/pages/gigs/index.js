import Head from 'next/head';
import Script from 'next/script';
import styles from '../../styles/soulharvest.module.css';

export default function Gigs() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Gigs</title>
        <Script language="javascript" src="/scripts/calendar/popup.js" />
        <Script language="javascript" src="/scripts/calendar/2004/october/gigInfo.js" />
      </Head>

      <h1>Gigs</h1>
      <div className={styles.row}>
        <center>
          <table border="0" cellPadding="0" cellSpacing="0" width="60%" cols="2">
            <tbody>
              <tr>
                <td>NAV HERE</td>
                <td align="right">
                  <div className="month">MONTH TITLE HERE</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  MONTH CALENDAR HERE
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </div>
  )
}
