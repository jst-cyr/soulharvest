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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2001/april/">APR</a> | <a href="/gigs/2001/june/">JUN</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>May 2001</div>
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
                        <td>1</td>
                        <td>2</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/may/3.html')}>
                          <a><b>3<br />CCP<br />9:30pm</b></a>
                        </td>
                        <td>4</td>
                        <td>5</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>6<br /><br /><br /></td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>13<br /><br /><br /></td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/may/17.html')}>
                          <a><b>17<br />CCP<br />9:30pm<br /><font size="-2" color="#FF4444">CANCELLED</font></b></a>
                        </td>
                        <td>18</td>
                        <td>19</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>20<br /><br /><br /></td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>27<br /><br /><br /></td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td bgcolor="#76A7CB" onClick={() => gigInfo('/gigs/2001/may/31.html')}>
                          <a><b>31<br />
                          CCP<br />
                          9:30pm<br />
                          <font size="-2" color="#FF4444">CANCELLED</font></b>
                          </a>
                        </td>
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
