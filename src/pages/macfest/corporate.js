import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Corporate() {
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
          <tr valign="top">
            <td className="soulharvest">
              <br />
              <center>
                <h1>SPONSOR MacFEST 2001</h1>
              </center>

              <blockquote>
                <blockquote>
                  <b>PRESS RELEASE</b>
                  <br />
                  Soul Harvest is back at it, making ripples into waves with this years' MacFEST fundraiser. Kristen Lewis, lead singer and Principal of the annual “grassroots” festival will be heading up the donation fund to a Local Women’s Charity.
                  <br /><br />
                  <b><i>“Violence happens around us every day and if we can raise money and awareness, hopefully we will be doing our part for the community”</i></b>. An avid campaigner, Kristen Lewis has raised money for other local charities and non-profit organizations. Ottawa Friends of Tibet, Literacy in 3rd World Countries and the Bear Childrens’ Fund have been the most recent.
                  <br /><br />
                  This year, Soul Harvest, a local band for whom Kristen performs as vocalist, is holding a competition for other Ottawa talent in order to raise money for a cause that is known to all as “Violence Against Women”. <b><i>“It is a problem that is continuing to grow at an alarming rate in our global society…if I can start small, maybe it will be felt around the world. It’s a cause that mainly touches women’s lives, but on a grander scale, it trickles into all facets of that woman’s life. Her children, her peers, and of course relationships. This money will help the shelter get them (victims) what they need in order to survive this traumatic part of their lives.”</i></b>
                  <br /><br /><br />
                  The new millennium brings new motivation and an overwhelming sense of need within the community. We have chosen a local women’s Charity to invest our spirit in. At this time, we are appealing to local businesses and corporations to aid us in surpassing last year’s contribution to the Bear Childrens’ Fund. As appreciation for your gift, you will receive free advertising for your company during the performances. Additional benefits gained from supporting MacFEST if you include your logo for use on disc, we will display it on our website and any print ads we circulate.
                  <br /><br />
                  With your help, MacFEST will be a great success this year, by not only giving back to the community in the National Capital Region but also giving local talent a stage to showcase their abilities.
                  <br /><br /><br />
                  <h3>If you would like to donate to MacFEST or receive information on sponsoring the fundraiser, please contact:</h3>
                  <blockquote>
                    <blockquote>
                      <b>
                        Kristen Lewis, Principal MacFEST
                        <br />
                        <a href="mailto:klewis@ottawa.com">klewis@ottawa.com</a>
                      </b>
                    </blockquote>
                  </blockquote>
                </blockquote>
              </blockquote>
            </td>
            <td className="soulharvest">
              <center>
                <br />
                <b>Our sponsors:</b>
                <br />
                <a href="https://web.archive.org/web/20020329161120/http://www.distortionstudios.com/" alt="Distortion Studios">
                  <img src="/graphics/distortionLogo_s.gif" border="0" />
                </a>
                <br />
                {/* <a href="http://www.fyiottawa.com/ottsun.shtml" alt="The Ottawa Sun"><img src="/graphics/sunLogo.gif" border=0></a><br> */}
                <a href="https://web.archive.org/web/20010419072125/http://www.thebear.net/" alt="The Bear">
                  <img src="/graphics/bearLogo.gif" border="0" />
                </a>
                <br />
                <a href="https://web.archive.org/web/20020201162243/http://molson.com/splash.html" alt="Molson Canadian">
                  <img src="/graphics/molsonLogo.gif" border="0" />
                </a>
                <br />
                <h3>Blue Cactus Restaurant</h3>
                <br /><br />
                Join MacFEST today!
                <br />
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
