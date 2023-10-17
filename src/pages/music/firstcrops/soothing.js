import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function SomethingSoothing() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Something Soothing (First Crops)</title>
      </Head>
    
      <h1>Something Soothing (First Crops)</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/firstcrops/firstcrops.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The First Crops EP<br />
                  <b>Lyrics by: </b>Jason St-Cyr<br />
                  <b>Music by: </b>Jason St-Cyr and Sean McCullough<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>Summer 1998 in Orleans, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/firstcrops/soothing_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/soothing_clip.mp3">Clip</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/firstcrops/soothing.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/soothing.mp3">Download</a></font>
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
                  "The chimes echo the soul my heart fakes<br />
                  Waiting in the cold to hear <br />
                  Something soothing"<br /><br />

                  This song is to date the only Soul Harvest tune that relies solely on guitars and vocals. The accapella accompaniment was provided as a last minute idea during recording of the track.<br /><br />
                  The music and lyrics were written by Jason St-Cyr, with a melody guitar line written by lead guitarist Sean McCullough. While the lyrics are sometimes cryptic, the tale is an age-old one. Songwriter Jason St-Cyr says it is "a thank-you and an apology". To whom, he doesn't elaborate upon. 
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
