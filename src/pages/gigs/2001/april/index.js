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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2001/march/">MAR</a> | <a href="/gigs/2001/may/">MAY</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>April 2001</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <table border="1" cellPadding="2" cellSpacing="0" className={calendarStyles.dates}>
                    <thead>
                      <tr valign="top" align="center">
                        <th bgcolor="#444444" width="75">Sun.</th>
                        <th bgcolor="#444444" width="75">Mon.</th>
                        <th bgcolor="#444444" width="75">Tues.</th>
                        <th bgcolor="#444444" width="75">Wed.</th>
                        <th bgcolor="#444444" width="75">Thurs.</th>
                        <th bgcolor="#444444" width="75">Fri.</th>
                        <th bgcolor="#444444" width="75">Sat.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr valign="top" align="center">
                        <td>1<br /><br /><br /></td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/april/5.html')}>
                          <a><b>5<br />
                          CCP<br />
                          9:30pm<br />
                          <font color="#661111" size="-4">CANCELLED</font></b></a>
                        </td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>8<br /><br /><br /></td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/april/14.html')}>
                          <a><b>14<br />
                          SHOW<br />
                          9:00pm<br /></b></a>
                        </td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>15<br /><br /><br /></td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/april/19.html')}>
                          <a><b>19<br />
                          CCP<br />
                          9:30pm<br /></b></a>
                        </td>
                        <td>20</td>
                        <td>21</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>22<br /><br /><br /></td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/april/27.html')}>
                          <a><b>27<br />
                          BOBBY'S<br />
                          9:00pm<br /></b></a>
                        </td>
                        <td>28</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>29<br /><br /><br /></td>
                        <td>30</td>
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
    </div>
  );
}
