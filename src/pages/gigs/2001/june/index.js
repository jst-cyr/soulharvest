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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2001/may/">MAY</a> | <a href="/gigs/2001/july/">JUL</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>June 2001</div>
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
                        <td bgcolor="#444444"><br /><br /><br /><br /></td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td bgcolor="#444444">&nbsp;</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>3<br /><br /><br /></td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/june/9.html')}>
                          <a><b>9<br />
                          UNDERGROUND<br />
                          9:30pm<br /></b></a>
                        </td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>10<br /><br /><br /></td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/june/15.html')}>
                          <a><b>15<br />
                          ZAPHODS<br />
                          9:00pm<br /></b></a>
                        </td>
                        <td>16</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>17<br /><br /><br /></td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>24<br /><br /><br /></td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td bgcolor="#76A7CB">
                          <b>30<br />
                          SH in studio<br />
                          12am - 8am<br /></b>
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
    </div>
  );
}
