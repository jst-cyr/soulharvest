import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Music() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Music</title>
      </Head>
    
      <h1>Music</h1>
      <div className={styles.row}>
        <blockquote>
          <p>Until the release of the new CD, there will be no radio-release music available from Soul Harvest.  For the time being, however, you can enjoy these sample demos recorded at Bova Sound studios, and mixed by Eric St-Cyr of Auto-Wah Records.</p>
          <p>Recordings from previous years are available in the archive.</p>
          <a href="/music/archive">[archive...]</a>
        </blockquote>
      </div>
      <div className={styles.row}>
        <center>
          <table width="75%" cols="2" cellPadding="5" cellSpacing="0" border="0">
            <tbody>
              <tr><td align="center"><img src="/graphics/blackwav.gif" alt="Demo Tracks" border="0" height="50" width="50" align="left" /><h3>Demo Tracks</h3></td></tr>

              <tr bgcolor="#444444">
                <td><a href="/music/demo2003/Seans_Song.mp3">Sean's Song</a></td>
                <td align="right"><b>[3.2Mb]</b></td>
              </tr>

              <tr>
                <td><a href="/music/demo2003/Sleepless_Storms.mp3">Sleepless Storms</a></td>
                <td align="right"><b>[3.0Mb]</b></td>
              </tr>

              <tr bgcolor="#444444">
                <td><a href="/music/demo2003/Cruel.mp3">Cruel</a></td>
                <td align="right"><b>[2.9Mb]</b></td>
              </tr>

              <tr>
                <td><a href="/music/demo2003/Choked.mp3">Choked</a></td>
                <td align="right"><b>[4.3Mb]</b></td>
              </tr>

              <tr bgcolor="#444444">
                <td><a href="/music/demo2003/Shes_Allright.mp3">She's Allright</a></td>
                <td align="right"><b>[4.5Mb]</b></td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      <div className={styles.row}>
        <blockquote>
          All songs are in <b>.mp3</b> format.  Please contact the band for other formats.  If you do not have an <b>mp3</b> player, we recommend <b><a href="http://winamp.com">WinAmp</a></b>, available free through the net.
        </blockquote>
      </div>
      <div className={styles.row}>
        <h3>Previous Releases</h3>
        <table border="0" cellPadding="5" cellSpacing="5">
          <tbody>
            <tr valign="top">
              <td valign="top"><a href="/music/ootb/"><img src="/music/ootb/ootb_s.jpg" border="0" alt="OotB" width="100" height="100" /></a></td>
              <td>
                <a href="/music/ootb/">Out of the Basement</a><br />
                <b>Released:</b> July 8, 2000<br />
                <b>Recorded:</b> BSTrax studios, Dunrobin, Ontario<br />
              </td>
            </tr>
            <tr valign="top">
              <td><a href="/music/rift/"><img src="/music/rift/therift_s.jpg" border="0" alt="The Rift" width="100" height="100" /></a></td>
              <td>
                <a href="/music/rift/">The Rift</a><br />
                <b>Released:</b> August 9, 1999<br />
                <b>Recorded:</b> Distortion Studios, Ottawa, Ontario<br />
              </td>
            </tr>
            <tr valign="top">
              <td><a href="/music/firstcrops/"><img src="/music/firstcrops/firstcrops_s.jpg" border="0" alt="First Crops" width="100" height="100" /></a></td>
              <td>
                <a href="/music/firstcrops/">The First Crops</a><br />
                <b>Released:</b> July 1998<br />
                <b>Recorded:</b> Spaz Records, Orleans, Ontario<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
