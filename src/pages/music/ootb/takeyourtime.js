import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function TakeYourTime() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Take Your Time</title>
      </Head>
    
      <h1>Take Your Time</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <a href="../ootb/"><img src="/music/ootb/ootb.jpg" width="300" /></a>
                  <br />
                  <b>Album: </b>Out of the Basement EP<br />
                  <b>Lyrics by: </b>Sean McCullough<br />
                  <b>Music by: </b>Ryan Lindsay<br />
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
                          <a href="/music/ootb/take_your_time.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/ootb/take_your_time.mp3">Download</a></font>
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
                  "Fear and loathing still remain <br />
                  No feeling feelings only pain <br />
                  And I've always felt the same <br />
                  So take your time, take your time." <br /><br />
                  Conceived by guitarist Ryan Lindsay, this song made it's first appearance on the album "The Rift". It has since become the opening song to every Soul Harvest show with it's strong beat, great vocals, and amazing guitar work.  <br /><br />
                  This track was updated by Soul Harvest in July 2000 and will appear on the upcoming SH CD. The song features Jason St-Cyr on lead guitar, Ryan Linday on rhythm guitar, Kristen Lewis on lead vocals, Chris Amos on drums, and Eric St-Cyr on bass guitar.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
