import Head from 'next/head';
import styles from '../../../../styles/soulharvest.module.css';
import calendarStyles from '../../../../styles/calendar.module.css';

export default function Gigs() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Gigs</title>
        <script src="/scripts/calendar/popup.js" lang="javascript" />
      </Head>

      <h1>Gigs</h1>
      <div className={styles.row}>
        <center>
          <table border="0" cellPadding="0" cellSpacing="0" width="60%" cols="2">
            <tbody>
              <tr>
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2003/november/">2003</a> | <a href="/gigs/2004/april/">APR</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>February 2004</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <table border="1" cellPadding="2" cellSpacing="0" className={calendarStyles.dates}>
                    <thead>
                    <tr valign="top" align="center">
                      <th bgcolor="#444444" width="75">
                        Sun.</th>
                      <th bgcolor="#444444" width="75">
                        Mon.</th>
                      <th bgcolor="#444444" width="75">
                        Tues.</th>
                      <th bgcolor="#444444" width="75">
                        Wed.</th>
                      <th bgcolor="#444444" width="75">
                        Thurs.</th>
                      <th bgcolor="#444444" width="75">
                        Fri.</th>
                      <th bgcolor="#444444" width="75">
                        Sat.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr valign="top" align="center">
                      <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2004/february/1.html')}>
                        <a><b>1<br />
                        Babylon<br />
			                  9:00pm</b></a><br />
			                  <br />
                      </td>
                      <td>2<br />
                        <b>Maria<br />
                        Hawkins</b><br />
                        Rainbow
                      </td>
                      <td> 3</td>
                      <td> 4</td>
                      <td> 5<br />
                        <a href="http://www.tfband.com/" target="_blank">Trevor Finlay</a><br />
                        Tucson's
                      </td>
                      <td> 6<br />
                        <a href="http://www.tfband.com/" target="_blank">Trevor Finlay</a><br />
                        Rainbow
                      </td>
                      <td> 7</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 8<br /><br /><br /></td>
                      <td> 9<br />
                        <b>Maria<br />
                        Hawkins</b><br />
                        Rainbow
                      </td>
                      <td> 10</td>
                      <td> 11</td>
                      <td> 12<br />
                        <a href="http://www.iconoclast-band.com/" target="_blank">iconoclast</a><br />
                        Zaphods<br />
                      </td>
                      <td> 13<br />
                        <b>Kashmir -<br />
                        Zeppelin<br />
                        Tribute</b><br />
                        Barrymore's
                      </td>
                      <td bgcolor="#FF9999"> 14<br />
                        Valentine's<br />
                        Day
                      </td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 15<br /><br /><br /></td>
                      <td> 16<br />
                        <b>Maria<br />
                        Hawkins</b><br />
                        Rainbow
                      </td>
                      <td> 17</td>
                      <td> 18</td>
                      <td> 19<br />
                        <a href="http://www.keepyourselfgoodcompany.com/" target="_blank">KYGC</a><br />
                        Barrymore's
                      </td>
                      <td> 20</td>
                      <td> 21<br />
                        <b>South Side<br />
                        Steve</b><br />
                        Tucson's
                      </td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 22<br /><br /><br /></td>
                      <td> 23<br />
                        <b>Maria<br />
                        Hawkins</b><br />
                        Rainbow
                      </td>
                      <td> 24</td>
                      <td> 25</td>
                      <td> 26<br />
                        <a href="http://www3.sympatico.ca/little.bones/" target="_blank">Little Bones</a><br />
                        O'Connor's<br />
                        Irish Pub
                      </td>
                      <td> 27<br />
                        <a href="http://www.krisward.com/" target="_blank">Kris Ward</a><br />
                        Cafe Dekcuf<br />
                        <hr />
                        <a href="http://www.rudigerstank.tk/" target="_blank">Rudiger's Tank</a><br />
                        Rainbow
                      </td>
                      <td> 28<br />
                        <a href="http://www.siobhan.ca" target="_blank">Siobhan</a><br />
                        Tara Cross
                      </td>
                    </tr>
                    <tr valign="top" align="center">
                      <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2004/february/29.html')}>
                        <a><b>29<br />
                        Babylon<br />
			                  9:00pm</b></a><br />
			                  <br />
                      </td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                    </tr>
                    </tbody>
                  </table> 

                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      
      <div className="row">
        <br /><br />
        <b>Click on a date for more information on the show.<br />
        (start time, cover charge, address, directions, additional bands).</b>
        <br /><br />
        <font color="#76A7CB"><b>BLUE</b></font> addresses denote Soul Harvest shows.  Special dates are likewise highlighted.<br />
        All other shows feature other local Ottawa acts.
      </div>

    </div>
  )
}
