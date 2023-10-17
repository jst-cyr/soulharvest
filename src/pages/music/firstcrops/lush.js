import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Lush() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Lush (First Crops)</title>
      </Head>
    
      <h1>Lush (First Crops)</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <img src="/music/firstcrops/firstcrops.jpg" width="150" height="150" />
                  <br />
                  <b>Album: </b>The First Crops EP<br />
                  <b>Lyrics by: </b>N/A<br />
                  <b>Music by: </b>Sabastien Callander<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>Summer 1998 in Orleans, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/firstcrops/lush_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/lush_clip.mp3">Clip</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/firstcrops/lush.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/lush.mp3">Download</a></font>
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
                  Just a little bit of the fun the band got into that wound up on the EP.  Listen for the solo a la Iron Maiden...
                  </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
