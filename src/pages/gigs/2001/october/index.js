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
                <td><div className={calendarStyles.dates}><b><a href="/gigs/2001/september/">SEPT</a> | <a href="/gigs/2001/november/">NOV</a></b></div></td>
                <td align="right">
                  <div className={calendarStyles.month}>October 2001</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <table border="1" cellPadding="2" cellSpacing="0" className={calendarStyles.dates}>
                    <thead>
                      <tr valign="top" align="center">
                        <th bgcolor="#444444" width="75">Sun.</th>
                        <th bgcolor="#444444" width="75">Mon.</th>
                        <th bgcolor="#444444" width="75">Tue.</th>
                        <th bgcolor="#444444" width="75">Wed.</th>
                        <th bgcolor="#444444" width="75">Thu.</th>
                        <th bgcolor="#444444" width="75">Fri.</th>
                        <th bgcolor="#444444" width="75">Sat.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr valign="top" align="center">
                        <td bgcolor="#444444"><br /><br /><br /></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>7<br /><br /><br /></td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>14<br /><br /><br /></td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>21<br /><br /><br /></td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                      </tr>
                      <tr valign="top" align="center">
                        <td>28<br /><br /><br /></td>
                        <td>29</td>
                        <td>30</td>
                        <td>31<br />Hallowe'en<br /></td>
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
