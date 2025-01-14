import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function WannaGoHome() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Wanna Go Home</title>
      </Head>
    
      <h1>Wanna Go Home</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/rift/therift.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The Rift<br />
                  <b>Lyrics by: </b>Chris Amos<br />
                  <b>Music by: </b>McCullough, J. St-Cyr, Amos, Van Soest, and Lindsay<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>August 19th 1999 at Distortion Studios in Ottawa, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/rift/wannagohome_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <a href="/music/rift/wannagohome_clip.mp3">Clip</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/wannagohome.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/wannagohome.mp3">Download</a></font>
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
                  "I've seen the many faces<br />
                  Of the plain and simple places"<br /><br />

                  The only song written by drummer Chris Amos, the music was worked out in a collaborative jam and has a very retro feel to it.  A little surprise for classic rock fans is in there at the end of this track.<br /><br />
                  The song features Dave Van Soest on vocals, Jason St-Cyr on bass guitar and backing vocals, Chris Amos on drums, Sean McCullough on rhythm guitar, and Ryan Lindsay on lead guitar.  The song is available on the 1999 album "The Rift".
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
