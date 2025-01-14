import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Stumbled() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Stumbled</title>
      </Head>
    
      <h1>Stumbled</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/rift/therift.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The Rift<br />
                  <b>Lyrics by: </b>Jason St-Cyr<br />
                  <b>Music by: </b>Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>August 19th 1999 at Distortion Studios in Ottawa, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <img src="/graphics/spkr.gif" border="0" />
                        </td>
                        <td>
                          Clip [N/A]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/stumbled.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/stumbled.mp3">Download</a></font>
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
                  "Another day I spent without you my dear<br />
                  And I felt just fine <br />
                  I won't be breakin' up over this <br />
                  I won't be crying <br /><br />
                  Probably the worst and best use of simple lyrics in songwriter Jason St-Cyr's repertoire is the song Stumbled. While the use of the "3rd verse same as the first" method is unoriginal, without it the song would lack it's cyclical nature which truly highlights the tale being told. As in all of his lyrics, the song attempts to tell a tale we can all identify with. In this track, the story follows the tale of a man trying to get away from some unknown woman, only to achieve it and realise his loss. The change from pursued to pursuer is highlighted by the first and third verses which switch roles on the male character. <br /><br />
                  This track, recorded for the "First Crops EP" was re-recorded for "The Rift" in August 1999. You can download the new track from Soul Harvest's Riffage.com web page, or you can contact the band to order the new CD. 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
