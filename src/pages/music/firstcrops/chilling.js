import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function ChillingOnThePatio() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Chillin' on the Patio (First Crops)</title>
      </Head>
    
      <h1>Chillin' on the Patio (First Crops)</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/firstcrops/firstcrops.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The First Crops EP<br />
                  <b>Lyrics by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Music by: </b>Sean McCullough and Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>Summer 1998 in Orleans, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/firstcrops/chilling_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/chilling_clip.mp3">Clip</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/firstcrops/chilling.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/chilling.mp3">Download</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/firstcrops/"><img src="/music/firstcrops/firstcrops_s.jpg" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/">CD INFO</a></font>
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
                  This recording was done in Summer 1998, and was re-recorded for "The Rift" and the upcoming SH album due out by the end of 2000.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
