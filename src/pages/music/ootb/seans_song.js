import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function ChillingOnThePatio() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Sean's Song</title>
      </Head>
    
      <h1>Sean's Song</h1>
      <div className={styles.row}>
        <table>
          <tbody>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <a href="./ootb/"><img src="/music/ootb/ootb.jpg" width="300" /></a>
                  <br />
                  <b>Album: </b>Out of the Basement EP<br />
                  <b>Lyrics by: </b>Sean McCullough<br />
                  <b>Music by: </b>Jason St-Cyr, Sean McCullough<br />
                  <b>Performed by: </b>Soul Harvest<br />
                  <b>Recorded: </b>July 8th, 2000 at BS Trax Studios in Dunrobin, Ontario<br /><br />


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
                          <a href="/music/ootb/seans_song.mp3"><img src="/graphics/download.gif" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/ootb/seans_song.mp3">Download</a></font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/music/ootb/"><img src="/music/ootb/ootb_s.jpg" height="20" border="0" /></a>
                        </td>
                        <td>
                          <font face="arial,helvetica,verdana" size="-1"><a href="/music/ootb/">CD INFO</a></font>
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
                  "Sorry ma'am, we're not stoned<br />
                  We're like this anyways"<br /><br />
                  "I told my baby, it just cant be this way<br />
                  I said I told my baby, it just cant be this way<br />
                  Cause i've fallen in love once before babe,<br />
                  Never been the same"<br /><br />
                  Written in 1999 by Sean McCullough and Jason St-Cyr as part of their blues side-project, this song (formerly titled "Never be the same") was adopted by Soul Harvest during the great band-merging in January of 2000. The song features Jason St-Cyr on lead guitar, Ryan Linday on rhythm guitar, Kristen Lewis on lead vocals, Chris Amos on drums, Eric St-Cyr on bass guitar and keyboards, and Johnny Arthur on backing vocals and harmonica.This track is a sample from the newly recorded Soul Harvest demo, and will be the first track on the upcoming SH CD due out by the end of 2000. The song was recorded at BSTrax studios in Dunrobin, Ontario on July 8th, 2000. The song was mixed by Eric St-Cyr of Auto-Wah Records.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>       
    </div>
  )
}
