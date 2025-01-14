import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Mirrortime() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Mirrortime</title>
      </Head>
    
      <h1>Mirrortime</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/graphics/blackwav.gif" width="150" height="150" />
                  <br />
                  <b>Lyrics by: </b>Chris Amos<br />
                  <b>Music by: </b>Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Engineered by: </b>Tracy Holmes<br />
                  <b>Recorded: </b>June 30, 2001 at Distortion Studios<br /><br />


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
                          <a href="/music/Mirrortime.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/Mirrortime.mp3">Download</a></font>
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
                  "I came to help you one last time<br />
                  You need to make it count<br />
                  Cuz when I'm gone, I can't be there<br />
                  Just to laugh it all about."<br /><br />
                  Mirrortime was the first song to be recorded for the next Soul Harvest album, and the new sound on the recording is much more in line with the goals of the band than some of the past efforts. Tracy Holmes, who engineered this track, managed to capture the band's essence perfectly, and the song marks a good start to what may be a long-term project as the band tries to raise the cash to record the new album.  This track is the standard mix made of the recording, before mastering.  When the album is completed, mastered versions of some of the songs will be made available through the website.<br /><br />
                  This song first made it's live debut at the Crimson Clover as part of Soul Harvest's 4-piece house band evenings. A new arrangement for 8 pieces was done, and this track now features Jason St-Cyr on distorted and clean rhythm guitars, Ryan Lindsay on lead guitar, Kristen Lewis on lead vocals, Chris Amos on drums, Eric St-Cyr on bass guitar and keyboards, and Jonny Arthur on harmonica. 

                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
