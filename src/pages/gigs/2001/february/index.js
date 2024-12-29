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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/oldgigs">ARCHIVE</a> | <a href="/gigs/2001/march/">MAR</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>February 2001</div>
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
                        <td bgcolor="#444444">&nbsp;<br /><br /><br /></td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td>1<br /><br /><br /></td>
                        <td>2</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/february/3.html')}>
                          <a><b>3<br />
                          O'BRIENS<br />
                          9:30pm<br /></b></a>
                        </td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>4<br /><br /><br /></td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/february/8.html')}>
                          <a><b>8<br />
                          CCP<br />
                          9:30pm<br /></b></a>
                        </td>
                        <td>9</td>
                        <td>10</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>11<br /><br /><br /></td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>18<br /><br /><br /></td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/february/22.html')}>
                          <a><b>22<br />
                          CCP<br />
                          9:30pm<br /></b></a>
                        </td>
                        <td>23</td>
                        <td>24</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>25<br /><br /><br /></td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
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
