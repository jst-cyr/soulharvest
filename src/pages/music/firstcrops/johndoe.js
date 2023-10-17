import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function JohnDoe() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - John Doe (First Crops)</title>
      </Head>
    
      <h1>John Doe (First Crops)</h1>
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
                  <b>Music by: </b>Jason St-Cyr<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>Summer 1998 in Orleans, Ontario<br /><br />


                  <table border="0">
                    <tbody>
                      <tr valign="top">
                        <td>
                          <a href="/music/firstcrops/johndoe_clip.mp3"><img src="/graphics/spkr.gif" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/johndoe_clip.mp3">Clip</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/firstcrops/johndoe.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/firstcrops/johndoe.mp3">Download</a></font>
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
                  "Comes back and she's not there <br />
                  Not a note anywhere <br />
                  He falls back into a chair <br />
                  She's gone"<br /><br />
                  This fictional ballad was one of the first tunes written for Soul Harvest. Using a very simple repetitive structure, the song takes the listener through the tale of the poor soul John Doe, written to be the "anyman" that we can all recognize, either in ourselves or in someone we know. <br /><br />
                  One of the most lyrically impressive songs in the Soul Harvest set, this song is rarely played live by the band and can usually only be heard on the band's various recordings.<br /><br />
                  This track showcases the guitar work of Sean McCullough and Jason St-Cyr, with impromptu bass guitar by Ryan Lindsay and the drum stylings of Eric St-Cyr. The track was re-recorded in August 1999 for the album "The Rift", which can be purchased through the band.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
