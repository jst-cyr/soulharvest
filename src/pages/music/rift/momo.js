import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Momo() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Momo/Good Little Girl</title>
      </Head>
    
      <h1>Momo/Good Little Girl</h1>
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
                  <b>Music by: </b>Ryan Lindsay<br />
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
                          <a href="/music/rift/momo.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/momo.mp3">Download</a></font>
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
                  "Another rage, she never screams, good little girl.<br />
                  And the darkness hides the bruises on her arms. <br />
                  But she won't ask for help, she's seen better days."<br /><br />

                  One of the first songs brought to Soul Harvest by Ryan Lindsay, the music is a balance of rock and pop which reminds many of the musical styles of bands like Collective Soul and Smashing Pumpkins.  This track is available on the 1999 album "The Rift" which can be purchased through the band or on <a href="https://web.archive.org/web/20001002085556/http://artists.mp3s.com/artists/5/soul_harvest.html">mp3.com</a>.

                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
