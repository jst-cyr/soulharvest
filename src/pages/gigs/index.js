import Head from 'next/head';
import Script from 'next/script';
import styles from '../../styles/soulharvest.module.css';
import calendarStyles from '../../styles/calendar.module.css';

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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2004/september/">SEPT</a> | NOV</b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>October 2004</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <table border="1" cellpadding="2" cellspacing="0" class="dates">
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
                    <tr valign="top" align="center">
                      <td bgcolor="#444444">&nbsp;<br /><br /><br /></td>
                      <td bgcolor="#444444"> &nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 3<br /><br /><br /></td>
                      <td> 4</td>
                      <td> 5</td>
                      <td> 6</td>
                      <td> 7</td>
                      <td> 8</td>
                      <td bgcolor="#76A7CB">
                        <a href="javascript:gigInfo('9')"><b>9<br />
                        Animal Noises III<br />
                        9pm</b></a>
                        <br /><br />
                      </td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 10<br /><br /><br /></td>
                      <td> 11</td>
                      <td> 12</td>
                      <td> 13</td>
                      <td> 14</td>
                      <td> 15</td>
                      <td> 16</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 17<br /><br /><br /></td>
                      <td> 18</td>
                      <td> 19</td>
                      <td> 20</td>
                      <td> 21</td>
                      <td> 22</td>
                      <td> 23</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 24<br /><br /><br /></td>
                      <td> 25</td>
                      <td> 26</td>
                      <td> 27</td>
                      <td> 28</td>
                      <td> 29</td>
                      <td> 30</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 31<br /><br /><br /></td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                      <td bgcolor="#444444">&nbsp;</td>
                    </tr>
                  </table> 

                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      
      <div class="row">
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
