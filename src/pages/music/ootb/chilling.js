import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Chilling() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Chillin' On Patio</title>
      </Head>
    
      <h1>Chillin' On Patio</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <a href="../ootb/"><img src="/music/ootb/ootb.jpg" width="300" /></a>
                  <br />
                  <b>Album: </b>Out of the Basement EP<br />
                  <b>Lyrics by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Music by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>July 8th, 2000 at BS Trax Studios in Dunrobin, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <img src="/graphics/spkr.gif" border="0" />
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1">Clip [N/A]</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/ootb/chilling.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/ootb/chilling.mp3">Download</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/ootb/"><img src="/music/ootb/ootb_s.jpg" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/ootb/">CD INFO</a></font>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </font>
              </td>
              <td>
                <font face="arial,helvetica,verdana" size="-1">
                  <font size="+1"><b>Lyrics and Story</b></font>
                  <br /><br />
                  "Sorry ma'am, we're not stoned<br />
                  We're like this anyways"<br /><br />
                  This song has become like a flagship for the Soul Harvest set. For whatever reason, every member of the audience seems to enjoy this one. Most state that it's because they can relate to what's going on, even though the entire song revolves around inside jokes known only to a few people. <br /><br />
                  Lines like "To the drive-ins and the praying mantis" mean absolutely nothing to anyone hearing it, but the up-beat feel of the whole song, mixed with the laid-back approach the band takes to performing this track gets everybody into it. <br /><br />
                  This track was updated by Soul Harvest in July 2000 and will appear on the upcoming SH CD. The song features Jason St-Cyr on rhythm guitar, Ryan Linday on lead guitar, Kristen Lewis on lead vocals, Chris Amos on drums, Eric St-Cyr on bass guitar, and a special appearance by Johnny Arthur. 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
