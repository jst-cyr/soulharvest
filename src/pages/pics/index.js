import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Pics() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Pics</title>
      </Head>
    
      <h1>Pics</h1>
      <div className={styles.row}>
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr valign="top">
              <td><img src="/pics/2004/2004-02-01/2004-02-01_babylon_s.jpg" border="0" width="100" height="100" /></td>
              <td><img src="/pics/macfest/2000_1_s.jpg" border="0" width="100" height="100" /></td>
              <td><img src="/pics/2004/2004-02-01/2004-02-01_babylon15_s.jpg" border="0" width="100" height="100" /></td>
              <td><img src="/pics/2003/Bumpers2003-Jay_s.jpg" border="0" width="100" height="100" /></td>
            </tr>
          </tbody>
        </table>
        <p>Welcome to the <b>Soul Harvest</b> photo gallery.  Click on the links to view the various photo sets.</p>
      </div>
      <div className={styles.row}>
        <ul>
          {/* <li><a href="/pics/2004/2004-05-29/">Yamaha Last Band Standing @ Babylon (May 29, 2004)</a></li> */}
          <li><a href="/pics/2004/2004-04-05/">Harmony House Benefit @ Dekcuf (Apr. 6, 2004)</a> <b>[NEW!]</b></li>
          <li><a href="/pics/2004/2004-02-29/">Leap Year @ Babylon (Feb. 29, 2004)</a> <b>[NEW!]</b></li>
          <li><a href="/pics/2004/2004-02-01/">Superbowl @ Babylon (Feb. 1, 2004)</a> <b>[new photos!]</b></li>
          <li><a href="/pics/2003/">Photos from 2003</a></li>
          <li><a href="/pics/ccp/">Live photos from the Crimson Clover Pub (221 Rideau St.)</a></li>
          <li><a href="/pics/obriens/">Photos from O'Briens Pub (1070 Bank St.)</a></li>
          <li><a href="/pics/2000/">2000 Photo Shoot (by Lisa Kelly)</a></li>
          <li><a href="/pics/macfest/">MacFEST 2000</a></li>
          <li><a href="/pics/1999/">Soul Harvest (1999)</a></li>
          <li><a href="/pics/rec_rift/">Recording "The Rift" (1999)</a></li>
        </ul>
        <br /><br />
      </div>
      <div className={styles.row}>
        <h2>CD Cover Art</h2>
        <table cellPadding="5" cellSpacing="0" border="0">
          <tbody>
            <tr bgcolor="#444444">
              <td><a href="/music/firstcrops/"><img src="/music/firstcrops/firstcrops_s.jpg" alt="First Crops" border="0" height="100" /></a></td>
              <td><a href="/music/rift/"><img src="/music/rift/therift_s.jpg" alt="The Rift" border="0" height="100" /></a></td>
              <td><a href="/music/ootb/"><img src="/music/ootb/ootb_s.jpg" alt="Out of the Basement" height="100" border="0" /></a></td>
              <td><a href="/pics/hardrain.jpg"><img src="/pics/hardrain_s.jpg" alt="Hard Rain" border="0" height="100" /></a></td>
            </tr>
            <tr>
              <th><font size="-2">First Crops</font></th>
              <th><font size="-2">The Rift</font></th>
              <th><font size="-2">Out of the Basement</font></th>
              <th><font size="-2">Hard Rain (not released)</font></th>
            </tr>
          </tbody>
        </table>

        <br /><br />
        <b>
          All photographs are the original work of Lisa Kelly, except where noted.<br />
          All digital alterations, touch-ups, etc. are courtesy of Jason St-Cyr or Lisa Kelly<br />
          CD cover art by Sean McCullough and Jason St-Cyr.
        </b>
      </div>
    </div>
  )
}
