import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Archive() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Music Archive</title>
      </Head>
    
      <h1>Music Archive</h1>
      <div className={styles.row}>
        <blockquote>
          <p>From days gone by, these recordings cover the various lineups that have been called "Soul Harvest" over the years.  Enjoy!</p>
        </blockquote>
      </div>
      <div className={styles.row}>
        <center>
        <table width="75%" cols="3" cellpadding="2" cellspacing="0" border="0">
          <tbody>
            <tr bgcolor="#444444">
              <td align="left" width="50%" valign="top">
                <font face="arial,helvetica,verdana" color="#0099FF"><b>SONG</b> <font size="-1">(click for more info)</font></font>
              </td>
              <td valign="top">
                <center><font face="arial,helvetica,verdana" color="#0099FF"><b>CLIPS</b></font></center>
              </td>
              <td align="left" valign="top">
                <center><font face="arial,helvetica,verdana" color="#0099FF"><b>GET</b></font></center>
              </td>
            </tr>

            {/* BONUS TRAX */}
            <tr>
              <td align="center" colspan="3">
                <img src="/graphics/blackwav.gif" alt="Bonus Trax" border="0" height="50" width="50" align="left" />
                <font face="arial,helvetica,verdana" color="#0099FF"><b>Bonus Trax</b></font>
              </td>
            </tr>

            <tr bgcolor="#444444">
              <td><font face="arial,helvetica" size="-1" color="#33CCFF">Blame (Live @ CCP)</font></td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="ccp_blame.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            <tr>
              <td><font face="arial,helvetica" size="-1" color="#33CCFF">John Doe (Live @ CCP)</font></td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="ccp_johndoe.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            <tr bgcolor="#444444">
              <td>
                <a href="midnight_sky">
                  <font face="arial,helvetica" size="-1" color="#33CCFF">Midnight Sky</font>
                </a>
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="Midnight_Sky.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="mirrortime">
                  <font face="arial,helvetica" size="-1" color="#33CCFF">Mirrortime</font>
                </a>
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="Mirrortime.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            <tr bgcolor="#444444">
              <td>
                <font face="arial,helvetica" size="-1" color="#33CCFF">Something Soothing (Live @ CCP)</font>
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="ccp_somethingsoothing.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            {/* OUT OF THE BASEMENT */}
            <tr align="middle">
              <td align="center" colspan="3">
                <hr />
                <a href="ootb/">
                  <img src="ootb/ootb_s.jpg" alt="Out of the Basement" border="0" height="50" width="50" align="left" />
                </a>
                <font face="arial,helvetica,verdana" color="#0099FF"><b>Out of the Basement EP</b></font>
              </td>
            </tr>

            <tr bgcolor="#444444">
              <td>
                <a href="ootb/chilling.html">
                  <font face="arial,helvetica" color="#33CCFF" size="-1">Chillin' on the Patio</font>
                </a>
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="ootb/chilling.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="ootb/cruel.html">
                  <font face="arial,helvetica" size="-1" color="#33CCFF">Cruel</font>
                </a>
              </td>
              <td align="center">&nbsp;</td>
              <td align="center">
                <a href="ootb/cruel.mp3"><img src="/graphics/download.gif" height="20" border="0" alt="Download" /></a>
              </td>
            </tr>

            {/*Additional rows have been omitted for brevity*/}
          </tbody>
        </table>

        </center>
      </div>
      <div className={styles.row}>
        <blockquote>
          All songs are in <b>.mp3</b> format.  Please contact the band for other formats.  If you do not have an <b>mp3</b> player, we recommend <b><a href="http://winamp.com">WinAmp</a></b>, available free through the net.
        </blockquote>
      </div>
    </div>
  )
}
