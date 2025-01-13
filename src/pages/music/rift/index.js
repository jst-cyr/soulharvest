import Head from 'next/head';
import styles from '../../../styles/soulharvest.module.css';

export default function Rift() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - The Rift</title>
      </Head>
    
      <h1>The Rift</h1>
      <div className={styles.row}>
        <table border="0" cols="2" cellSpacing="5" cellPadding="5" width="85%">
          <tbody>
            <tr valign="top">
              <td colSpan="2">
                <center>
                  <br />
                  <img src="/music/rift/therift.jpg" height="200" />
                  <br /><br />
                </center>
              </td>
            </tr>
            <tr valign="top">
              <td width="50%">
                <font face="arial,helvetica,verdana" size="-1">
                  <b>Album: </b>The Rift<br />
                  <b>Recorded: </b>August 19, 1999<br />
                  <b>Where: </b>Distortion Studios, Ottawa, ON<br />
                  <br /><br />
                
                  Soul Harvest spent 3 hours recording live off the floor at Distortion Studio 2 to get 11 tracks recorded.  8 went onto "The Rift".  This album features the first appearance of several SH greats such as "Wanna Go Home", "Take Your Time", and "She's Alright".
                  <br /><br />
                  You can currently purchase the Rift from our <a href="https://web.archive.org/web/20001002085556/http://artists.mp3s.com/artists/5/soul_harvest.html" target="_new">mp3.com website</a>.  Drop us a line and let us know what you think at: <a href="mailto:soulharvest@canada.com">soulharvest@canada.com</a>
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
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/chilling"><font  face="arial,helvetica" size="-1" color="#33CCFF">Chillin' on the Patio</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/chilling.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/johndoe"><font  face="arial,helvetica" size="-1" color="#33CCFF">John Doe</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/johndoe.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/momo"><font  face="arial,helvetica" size="-1" color="#33CCFF">Momo/Good Little Girl</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/momo.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/shesallright"><font  face="arial,helvetica" size="-1" color="#33CCFF">She's Alright</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/shesallright.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/stumbled"><font  face="arial,helvetica" size="-1" color="#33CCFF">Stumbled</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/stumbled.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/takeyourtime"><font  face="arial,helvetica" size="-1" color="#33CCFF">Take Your Time</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/takeyourtime.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/wannagohome"><font  face="arial,helvetica" size="-1" color="#33CCFF">Wanna Go Home</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/wannagohome.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>

              <tr bgcolor="#444444" valign="middle">
                <td><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="50" width="50" align="middle" /><a href="/music/rift/windflow"><font  face="arial,helvetica" size="-1" color="#33CCFF">Windflow</font></a></td>
                <td align="center">&nbsp;<a href="/music/rift/windflow.mp3" target="_new"><img src="/graphics/download.gif" height="30" border="0" /></a> </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>       
    </div>
  )
}
