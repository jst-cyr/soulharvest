import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Play() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - MacFEST 2001</title>
      </Head>

      <table>
        <tbody>
          <tr>
            <td>
              <font face="arial,helvetica,verdana" size="+1">
                <b>MacFEST 2001</b>
              </font>
            </td>
            <td align="right">
              <font face="arial, helvetica,verdana" size="-1">
                <b>
                  <a href="/macfest/">
                    <font color="#FFFFFF">&lt;&lt; Back to MacFEST</font>
                  </a>
                </b>
              </font>
            </td>
          </tr>

          {/* Page content */}
          <tr valign="top">
            <td className="soulharvest" colSpan={2}>
              <br />
              <center>
                <h1>Play @ MacFEST 2001</h1>
              </center>

              <blockquote>
                <blockquote>
                  Soul Harvest is asking for local talent to play at this years&apos; MacFEST. There are only three spots, so get your demos in!!
                  <br /><br />
                  <b>The Bear</b> will be running another contest on air for the other 3 spots available. Feel free to apply for both, and improve your odds!
                  <br /><br />
                  Send your press kit to:
                  <blockquote>
                    <blockquote>
                      <table cellPadding={0} cellSpacing={5} border={0}>
                        <tbody>
                            <tr valign="top">
                                <td>
                                    <img src="/macfest/splash_s.jpg" alt="MacFEST Splash" />
                                </td>
                                <td className="soulharvest">
                                    <b>
                                    <font color="#3366FF">PLAY@MACFEST</font>
                                    <br />
                                    c/o: Eric St-Cyr
                                    <br />
                                    Auto-wah Records
                                    <br />
                                    768 Lalande Terrace
                                    <br />
                                    Orleans, ON
                                    <br />
                                    K4A 2M3
                                    <br />
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                      </table>
                    </blockquote>
                  </blockquote>
                  <br /><br />
                  <ul>
                    <font size="-2">
                      <li>Deadline for submissions is July 1st. Winners will be notified July 9th.</li>
                      <li>
                        All applicants must be available to perform August 9th, 2001 at Barrymore&apos;s Music Hall in Ottawa, ON.
                      </li>
                      <li>
                        All performers at MacFEST will be expected to provide their own equipment and cover their own costs. Performers will be informed of required equipment.
                      </li>
                      <li>Submitted promotional materials will not be returned.</li>
                    </font>
                  </ul>
                </blockquote>
              </blockquote>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 