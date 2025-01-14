import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function TakeYourTime() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Take Your Time (The Rift)</title>
      </Head>
    
      <h1>Take Your Time (The Rift)</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/rift/therift.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The Rift<br />
                  <b>Lyrics by: </b>Sean McCullough<br />
                  <b>Music by: </b>Ryan Lindsay<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>August 19th 1999 at Distortion Studios in Ottawa, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/rift/takeyourtime_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <a href="/music/rift/takeyourtime_clip.mp3">Clip</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/takeyourtime.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/takeyourtime.mp3">Download</a></font>
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
                  "Fear and loathing still remains <br />
                  No feeling feelings only games <br />
                  And I've always felt the same <br />
                  So take your time, take your time." <br /><br />
                  Conceived by guitarist Ryan Lindsay, this song made it's first appearance on the album "The Rift". It has since become the opening song to every Soul Harvest show with it's strong beat, great vocals, and amazing guitar work.  <br /><br />
                  While having a different sound from some of the other Soul Harvest tracks, it is definitely a great piece of musicianship 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
