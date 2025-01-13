import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Chilling() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Chillin' On Patio (The Rift)</title>
      </Head>
    
      <h1>Chillin' On Patio (The Rift)</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/rift/therift.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The Rift<br />
                  <b>Lyrics by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Music by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>August 19th 1999 at Distortion Studios in Ottawa, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/rift/chilling_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <a href="/music/rift/chilling_clip.mp3">Clip</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/chilling.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/chilling.mp3">Download</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/"><img src="/music/rift/therift_s.jpg" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/">CD INFO</a></font>
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
                  This recording was done in August 1999 for "The Rift" at Distortion Studios in Ottawa, Ontario. Performed "Live-in-Studio" the band's shout of "To ignoring Kelly!" is probably the funniest thing on the whole CD.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
