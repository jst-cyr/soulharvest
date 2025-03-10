import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function MacFEST() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - MacFEST 2001</title>
      </Head>

      <table>
        <tbody>
          <tr valign="top">
            <td class="soulharvest">
              <h1>MacFEST 2001</h1>
              <div className={styles.row}>
                <h3>MACFEST HAS BEEN CANCELLED UNTIL FURTHER NOTICE</h3>
                <blockquote>
                    The annual Ottawa benefit concert known as MacFEST is in its planning stages yet again.
                    <br /><br />
                    Planned for the long weekend in August, this year's concert promises to be bigger and better than all those that have passed before.
                    <br /><br />
                    <ul>
                      <li><a href="/macfest/2001">MacFEST 2001</a><br />
                          Information on this year's benefit concert.<br /><br /></li>
                      <li><a href="corporate.html">Sponsor MacFEST</a><br />
                          Submit corporate information to apply to sponsor MacFEST 2001.<br /><br /></li>
                      <li><a href="prize.html">Prize package</a><br />
                          The prize package for the winner of the Bear's on-air MacFEST band contest.<br /><br /></li>
                      <li><a href="play.html">Play at MacFEST</a><br />
                          Submit band information to apply for a position in MacFEST 2001.<br /><br /></li>
                      <li><a href="/macfest/2000">MacFEST 2000</a><br />
                          Information on last year's benefit concert.<br /><br /></li>
                      <li><a href="mailto:soulharvest@soulharvest.ca">soulharvest@soulharvest.ca</a><br />
                          Request more information concerning MacFEST.<br /><br /></li>
                    </ul>
                </blockquote>
              </div>
            </td>
            <td className="soulharvest">
              <center>
                <img src="/macfest/splash_m.jpg" alt="MacFEST Splash" /><br /><br />
                <b>Sponsored by:</b><br />
                <a href="https://web.archive.org/web/20020329161120/http://www.distortionstudios.com/" alt="Distortion Studios"><img src="/graphics/distortionLogo_s.gif" border="0" /></a><br />
                {/*<a href="http://www.fyiottawa.com/ottsun.shtml" alt="The Ottawa Sun"><img src="/graphics/sunLogo.gif" border="0" /></a><br />*/}
                <a href="https://web.archive.org/web/20010419072125/http://www.thebear.net/" alt="The Bear"><img src="/graphics/bearLogo.gif" border="0" /></a><br />
                <a href="https://web.archive.org/web/20020201162243/http://molson.com/splash.html" alt="Molson Canadian"><img src="/graphics/molsonLogo.gif" border="0" /></a><br />
                <h3>Blue Cactus Restaurant</h3>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
