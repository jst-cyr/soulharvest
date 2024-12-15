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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2001/november/">NOV</a> | <a href="/gigs/2002/march/">2002</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>December 2001</div>
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
                      <td bgcolor="#444444">&nbsp;<br /><br /><br /></td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td> 1</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 2<br /><br /><br /></td>
                      <td> 3</td>
                      <td> 4</td>
                      <td> 5</td>
                      <td> 6</td>
                      <td> 7</td>
                      <td> 8</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 9<br /><br /><br /></td>
                      <td> 10</td>
                      <td> 11</td>
                      <td> 12</td>
                      <td> 13</td>
                      <td> 14</td>
                      <td> 15</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 16<br /><br /><br /></td>
                      <td> 17</td>
                      <td> 18</td>
                      <td> 19</td>
                      <td> 20</td>
                      <td> 21</td>
                      <td> 22</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 23<br /><br /><br /></td>
                      <td> 24<br />
                        Christmas Eve<br /></td>
                      <td> 25<br />
                        Christmas Day<br /></td>
                      <td> 26<br />
                        Boxing Day<br />
                      </td>
                      <td> 27</td>
                      <td> 28</td>
                      <td> 29</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 39<br /><br /><br /></td>
                      <td> 31<br />
                        New Year's Eve<br />
                      </td>
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