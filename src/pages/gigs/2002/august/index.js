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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2002/june/">JUNE</a> | <a href="/gigs/2003/march/">2003</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>August 2002</div>
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
                      <td> 1</td>
                      <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2002/august/2.html')}>
                        <a><b>2<br />
                        Underground<br />
			                  9:30pm</b></a><br />
			                  <br />
                      </td>
                      <td> 3</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 4<br /></td>
                      <td> 5</td>
                      <td> 6</td>
                      <td> 7</td>
                      <td> 8</td>
                      <td> 9</td>
                      <td> 10</td>
                    </tr>
                    <tr valign="top" align="center">
                      <td> 11<br /><br /><br /></td>
                      <td> 12</td>
                      <td> 13</td>
                      <td> 14</td>
                      <td> 15</td>
                      <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2002/august/16.html')}>
                        <a><b>16<br />
                        Bumpers<br />
			                  9:30pm</b></a><br />
			                  <br />
                      </td>
                      <td> 17</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 18<br /><br /><br /></td>
                      <td> 19</td>
                      <td> 20</td>
                      <td> 21</td>
                      <td> 22</td>
                      <td> 23</td>
                      <td> 24</td>
                    </tr>
                    <tr valign="top" align="center"> 
                      <td> 25<br /><br /><br /></td>
                      <td> 26</td>
                      <td> 27</td>
                      <td> 28</td>
                      <td> 29</td>
                      <td> 30</td>
                      <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2002/august/31.html')}>
                        <a><b>31<br />
                        Babylon<br />
			                  9:30pm</b></a><br />
			                  <br />
                      </td>
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