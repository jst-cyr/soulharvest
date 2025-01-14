import Head from 'next/head';
import styles from '../styles/soulharvest.module.css';

export default function Booking() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Booking Information</title>
      </Head>
    
      <h1>Booking Information</h1>
      <div className={styles.row}>
        <blockquote>
          Ryan Lindsay has taken over as main contact for all bookings and promotions. If you would like to book Soul Harvest for your venue please contact:<br />
          <blockquote>
            <h3>WHY?media booking</h3>
            <ul>
              <li><b>Contact:</b> Ryan Lindsay</li>
              <li><b>Phone:</b> (613) 762-6320</li>
              <li><b>Email:</b> <a href="mailto:whymedia@whymedia.ca">whymedia@whymedia.ca</a></li>
              <li><b>Website:</b> <a href="https://web.archive.org/web/20060101132254/http://www.whymedia.ca/" target="_blank">www.whymedia.ca</a></li>
            </ul>
          </blockquote>

          <br /><br />
          You can also book Soul Harvest through <b>Auto-wah Records</b>, an organization headed by Eric St-Cyr, which handles bookings and promotions.
        
          <blockquote>
            <h3>Auto-Wah Records</h3>
            <ul>
              <li><b>Contact:</b> Eric St-Cyr</li>
              <li><b>Phone:</b> (613) 291-2156</li>
              <li><b>Email:</b> <a href="mailto:autowah@autowahrecords.com">autowah@autowahrecords.com</a></li>
              <li><b>Website:</b> <a href="http://www.autowahrecords.com" target="_blank">www.autowahrecords.com</a></li>
            </ul>
          </blockquote>
        </blockquote>
      </div>
    </div>
  );
}
