import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Windflow() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Windflow</title>
      </Head>
    
      <h1>Windflow</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/rift/therift.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The Rift<br />
                  <b>Lyrics by: </b>Sabastian Callander<br />
                  <b>Music by: </b>Sean McCullough<br />
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
                          <a href="/music/rift/windflow.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/windflow.mp3">Download</a></font>
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
                  "Your dreams are made of <br />
                  The thread of a sandman's touch <br />
                  Oh you'll be dreaming here forever"<br /><br />

                  What <b>DO</b> the lyrics mean? Only Sabastien Callander knows for sure. Often ridiculed for his first, and last, lyric-writing attempt, the words have stuck with the song to this day. Lines like "There's nowhere you can hide that you could hide under the weather" and "Open up your evil eyes that feed your hollow mind" are just a sampling of the dark imagery used in his writing. <br /><br />
                  The song, conceived of by Sean McCullough as an attempt to bring a "metal" feel to some of the regular Soul Harvest fare seemed to meld with the words once the melody line for them was rewritten by Jason St-Cyr to match Jason's Vedder-esque style of singing. <br /><br />
                  Re-recorded for "The Rift", singer Dave Van Soest added his own "death-metal-lounge-singer" twist to the song's vocal line. 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
