import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function ShesAllright() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - She's Alright (The Rift)</title>
      </Head>
    
      <h1>She's Alright (The Rift)</h1>
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
                          <a href="/music/rift/shes_alright_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <a href="/music/rift/shes_alright_clip.mp3">Clip</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/rift/shesallright.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/rift/shesallright.mp3">Download</a></font>
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
                  "She's Alright<br />
                  She's just fine. <br />
                  She's my girl." <br /><br />
                  Once in a while the band has to get back to it's roots, and this was the case with She's Alright. Used to close off every show, this song has run as long as 15 minutes as each member of the band has a little fun. <br /><br />
                  Only with the blues can you hear such simple vocal structure that fits so well with the feel of the song. Sometimes a little goes a long way, and this song is one of the best brought to the band by songwriter Jason St-Cyr. 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
