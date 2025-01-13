import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function OOTB() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Out of the Basement EP</title>
      </Head>
    
      <h1>Out of the Basement EP</h1>
      <div className={styles.row}>
        <table border="0" cols="2" cellSpacing="5" cellPadding="5" width="85%">
          <tbody>
            <tr valign="top">
              <td colSpan="2">
                <center>
                  <br />
                  <img src="/music/ootb/ootb.jpg" height="200" />
                  <img src="/music/ootb/ootb_back.jpg" height="200" />
                  <br /><br />
                </center>
              </td>
            </tr>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <b>Album: </b>Out of the Basement EP<br />
                  <b>Recorded: </b>July 8th, 2000<br />
                  <b>Where: </b>BS Trax Studios in Dunrobin, Ontario<br />
                  <br /><br />
                  Soul Harvest spent 14 grueling hours in Dunrobin putting together this amazing 4-song EP of the new Soul Harvest line-up.  The EP features the stand-out single <b>"Sean's Song"</b>, the slow blues-tune <b>"Cruel"</b>, and re-recordings of old favourites <b>"Chillin' on the Patio"</b> and <b>"Take Your Time"</b>.
                  <br /><br />
                  You can currently <a href="https://web.archive.org/web/20001002085556/http://artists.mp3s.com/artists/5/soul_harvest.html" target="_new">download</a> the track <b>"Sean's Song"</b> from our mp3.com website.  Drop us a line and let us know what you think at: <a href="mailto:soulharvest@canada.com">soulharvest@canada.com</a>
                  <br /><br />
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.row}>
        <center>
          <table cols="3" cellPadding="2" cellSpacing="0" border="0" width="85%">
            <tbody>
              <tr bgcolor="#444444">
                <td align="left" width="50%" valign="top">
                  <font face="arial,helvetica,verdana"  color="#0099FF"><b>SONG</b> <font size="-1">(click for more info)</font></font>
                </td>

                <td align="left" valign="top">
                  <center>
                    <font face="arial,helvetica,verdana"  color="#0099FF"><b>GET</b></font>
                  </center>
                </td>
              </tr>

              <tr valign="middle">
                <td><img src="/music/ootb/ootb_s.jpg" alt="Out of the Basement" border="0" height="50" width="50" align="middle" /><a href="/music/ootb/seans_song"><font  face="arial,helvetica" size="-1" color="#33CCFF">Sean's Song</font></a></td>
                <td align="center"><a href="/music/ootb/seans_song.mp3"><img src="/graphics/download.gif" height="30" border="0" /></a></td>
              </tr> 

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/ootb/ootb_s.jpg" alt="Out of the Basement" border="0" height="50" width="50" align="middle" /><a href="/music/ootb/cruel"><font face="arial,helvetica" size="-1" color="#33CCFF">Cruel</font></a></td>
                <td align="center"><a href="/music/ootb/cruel.mp3"><img src="/graphics/download.gif" height="30" border="0" /></a></td>
              </tr>

              <tr valign="middle">
                <td><img src="/music/ootb/ootb_s.jpg" alt="Out of the Basement" border="0" height="50" width="50" align="middle" /><a href="/music/ootb/takeyourtime"><font  face="arial,helvetica" size="-1" color="#33CCFF">Take Your Time</font></a></td>
                <td align="center"><a href="/music/ootb/take_your_time.mp3"><img src="/graphics/download.gif" height="30" border="0" /></a></td>
              </tr>

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/ootb/ootb_s.jpg" alt="Out of the Basement" border="0" height="50" width="50" align="middle" /><a href="/music/ootb/chilling"><font  face="arial,helvetica" size="-1" color="#33CCFF">Chillin' on the Patio</font></a></td>
                <td align="center"><a href="/music/ootb/chilling.mp3"><img src="/graphics/download.gif" height="30" border="0" /></a></td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>       
    </div>
  )
}
