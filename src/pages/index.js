import Head from 'next/head';
import styles from '../styles/soulharvest.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soul Harvest - Ottawa Band from the early 2000's</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <meta name="Author" content="Jason St-Cyr" />
      </Head>

      <main>

        <center>
          <blockquote>
            <table border="0" cols="2" cellSpacing="0" cellPadding="3" width="85%">
              <tbody>
                <tr valign="middle">
                  <td bgcolor="#76A7CB">
                    <font face="arial,helvetica,verdana" size="+1">
                      <b>Soul Harvest</b>
                    </font>
                  </td>
                  <td bgcolor="#76A7CB" align="right">
                    <font face="arial,helvetica,verdana" color="#ffffff"><b>
                      <a href="mailto:soulharvest@soulharvest.ca"><font color="#FFFFFF">soulharvest</font><font size="+1" color="#FFFF99">@</font><font color="#FFFFFF">soulharvest.ca</font></a>
                    </b></font>
                  </td>
                </tr>
              </tbody>
            </table>

            <table border="0" cols="2" cellSpacing="0" cellPadding="3" width="85%"><tbody>
              <tr valign="top">
                <td width="150" class="soulharvest">
                  <img src="/pics/2000/Band-Line_Jason_s.jpg" border="0" width="100" height="100" alt="soulharvest.ca" /><br />
                  <br />
                  <a href="/index.shtml">
                    <img name="home" src="/graphics/home_off.gif" height="25" width="75" border="0" alt="Main - News and Reviews" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/home_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/home_off.gif")}
                    />
                  </a><br />
                  <a href="/bio.shtml">
                    <img name="home" src="/graphics/bio_off.gif" height="25" width="75" border="0" alt="Band Presskit and Biography" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/bio_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/bio_off.gif")}
                    />
                  </a><br />
                  <a href="/gigs/">
                    <img name="gigs" src="/graphics/gigs_off.gif" height="25" width="75" border="0" alt="Upcoming and Previous shows" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/gigs_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/gigs_off.gif")}
                    />
                  </a><br />
                  <a href="/music/">
                    <img name="clips" src="/graphics/clips_off.gif" height="25" width="75" border="0" alt="Music clips, full downloads, and tabs" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/clips_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/clips_off.gif")}
                    />
                  </a><br />
                  <a href="/pics/">
                    <img name="pics" src="/graphics/pics_off.gif" height="25" width="75" border="0" alt="Photo Gallery!" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/pics_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/pics_off.gif")}
                    />
                  </a><br />
                  <a href="/band.shtml">
                    <img name="band" src="/graphics/home_off.gif" height="25" width="75" border="0" alt="Band Members" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/home_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/home_off.gif")}
                    />
                  </a><br />
                  <a href="/booking.shtml">
                    <img name="booking" src="/graphics/booking_off.gif" height="25" width="75" border="0" alt="Booking Information" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/booking_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/booking_off.gif")}
                    />
                  </a><br />
                  Other SH sites:
                  <br />
                  <a href="http://www.garageband.com/artist/soulharvest" target="_new">SH @ garageband</a>
                  <br />
                  <a href="http://www.besonic.com/soulharvest" target="_new">SH @ besonic</a>
                  <br />
                  <a href="http://soulharvest.iuma.com" target="_new">SH @ IUMA</a>
                </td>
                <td class="soulharvest">
                  <table border="0" cellPadding="5" cellSpacing="5"><tbody>
                    <tr>
                      <td valign="top">
                        <h3>News!</h3>
                        <table border="0" cellPadding="5" cellSpacing="5">
                          <tr valign="top">
                            <td><a href="/gigs/"><img src="/pics/obriens/14-apr-2001_01_s.jpg" alt="Acoustic @ Dekcuf!" border="0" width="100" /></a></td>
                            <td>
                              <font face="arial,helvetica,verdana" size="-1"><b>Dekcuf. Be there. [29-aug-2004]</b><br />
	                            The boys from <a href="http://www.universalhabit.com" target="_blank">Universal Habit</a> invited us out to play with them at their Dekcuf show on Thursday (such nice guys!!).  Soul Harvest will be bringing a rare acoustic set to the stage, so don't miss it!  Check the gigs section for more details...<br />
	                            <a href="/gigs/">[more info...]</a><br /><br />
                              </font>
                            </td>
                          </tr>
                          <tr valign="top">
                            <td><a href="/pics/2004/2004-02-01/"><img src="/pics/2004/2004-02-29/2004-02-29_Jay_Ryan_s.jpg" alt="Live @ Babylon!" border="0" width="100" /></a></td>
                            <td>
	                            <font face="arial,helvetica,verdana" size="-1"><b>More February Pics! [13-jul-2004]</b><br />
	                            New pics from our Leap Year show opening for the Adopted! CHECK 'EM OUT!<br />
	                            <a href="/pics/2004/2004-02-29/">[view pics...]</a><br /><br />
                              </font>
                            </td>
                          </tr>
                          <tr valign="top">
                            <td><img src="/pics/2004/2004-02-01/2004-02-01_babylon14_s.jpg" alt="Live @ Babylon!" border="0" width="100" /></td>
                            <td>
	                            <font face="arial,helvetica,verdana" size="-1"><b>Hiding in Ottawa [13-jul-2004]</b><br />
	                            Soul Harvest has been pretty quiet, not that Ryan and Jay haven't been busy!  These Soul Harvest guys have been backing up Ottawa band <a href="http://www.twelve34.ca" target="_blank">twelve34</a> for the last while and just released a CD with the band! Touring with <b>twelve34</b> has kept the boys busy, so be sure to catch Ryan and Jay coming to a venue near you as <b>twelve34</b> hits Kingston and Toronto in August, then returns to Ottawa to headline at Barrymore's!<br />
	                            <a href="/pics/2004/2004-02-01/">[view pics...]</a><br /><br />
                              </font>
                            </td>
                          </tr>
                          <tr valign="top">
                            <td><a href="/pics/2004/2004-02-01/"><img src="/pics/2004/2004-02-01/2004-02-01_babylon15_s.jpg" alt="Live @ Babylon!" border="0" width="100" /></a></td>
                            <td>
	                            <font face="arial,helvetica,verdana" size="-1"><b>Pics from Superbowl Show! [07-jul-2004]</b><br />
	                            New pics are up of our Superbowl Sunday show at the Babylon!! CHECK 'EM OUT!<br />
                            	<a href="/pics/2004/2004-02-01/">[view pics...]</a><br /><br />
                              </font>
                            </td>
                          </tr>
                          <tr valign="top">
                            <td><a href="/music/"><img src="/pics/2000/Band-Car3_s.jpg" alt="Mirrortime" width="100" border="0" align="left" /></a></td>
                            <td>
                              <font face="arial,helvetica,verdana" size="-1"><b>DOWNLOAD NEW DEMOS!</b><br />
	                            You can now download the latest recording from Soul Harvest!<br />
                              SH has officially released the pre-mastering mixes of several demo songs for download, available right here on soulharvest.ca!  Go check it out!
                              </font>
                            </td>
                          </tr>
                        </table>
                        <br/><br/><br/>
                        <li>Can't stand our music? Or does our CD live in your Discman? Let us know by rating our songs over at <a href="http://www.besonic.com/soulharvest" target="_new" onMouseOver="window.status='Soul Harvest @ besonic.com';return true;" onMouseOut="window.status='';return true;">http://www.besonic.com/soulharvest</a></li>
                      </td>
                      <td valign="top" width="150" bgcolor="#444444">
                        <b>
                          Review of the month:
                          <br /><br />

                          <font face="arial,helvetica,verdana" size="-1">
                            <font color="#76A7CB">About Sleepless Storms:</font>
                            <br />
	                          "Kind of chunky, driving hard rock/alt-rock vibe. Maybe some Soundgarden influences? I can't tell. Kudos for not sounding exactly like some other band. I like the delayed Leslie-effected vocals in the verses - kind of Toolish, but they're a tad buried in the mix. The vocals during the chorus parts sound just right - nice harmonies there too. Mix is pretty darn good - drums in general are a little quiet compared to everything else, especially the kick. Aside from that and maybe tweaking vocal levels a bit, it sounds great. Rock on."<br /><code>- Steven Webb, "UltraViolet Uforia" (Sammamish, Washington)</code>
	                          {/*
                            (Sean's Song) "Well I would like to focus on the positives of the song first. Number one, is that the rhythm was very consistent and sounded pretty good. Number 2, the mood that was set was original melodic. Here is where I have some criticisms. The guitars, though sounding good, were a bit boring in that they just played the exact pattern through out the whole song rather than venturing out to grasp the listener. The lead vocals, though having a lot of power and style, were frequently going in and out of tune during the song. I think that if the band were a little more daring and tightened up the sound a bit, this song would come off a lot better."<br /><code>- James "BaritoneMan" Pauly, "Beatnick Turtle" (Chicago, Illinois)</code>
	                          (Sean's Song) "Nice guitar intro. Good guitar work,nice tone. Gives the listener a spooky feeling. Female vocals are strong, very good sounding. Lyrics are typical blues. Doesn't matter though, the music conveys the mood very well. If that's harmonica I hear in there, it's not really helping the song out much in my opinion. Drums could benefit from a tighter snare "CRACK" when drummer isn't side-sticking. Overall really nice effort, enjoyable. "<br /><code>- Joe Narde, "Brainbell Janglers" (Corning, New York)</code>
                            "Nice melodic guitar... very interesting... makes you want to hear more... the female's vocals are very very nice. Nice lyrics too! Male vocals are very interesting! the production seems to be very well produced! And the guitar solo is very nice. It fits very well with the song. "<br><code>- 427 (Gander, Newfoundland)</code>
                            (Chillin) "...speaking of lyrics, that's a cute one in the second verse: "Sorry ma'am, we're not stoned, we're like this anyway!" The mood is perky and good ol' three-chord rockin', with a hint of goofiness that explodes into "okay, this is just *wacko*" when the guy goes off on his rant on how cruddy the gin was. " <br><code>- enjelani (Saratoga, California)</code>
                            (Cruel) "...I realized that here was a jam of the sort that one used to get on albums of the 60s all the time, and loved it. I felt like I was at an outdoor concert with a bunch of hippy friends where one expected to hear a lot of free-flowing jams like that all the time." <br><code>- TexasTom46  (Milwaukee, Wisconsin)</code>
                            "Jewel (at her best) crosses with early Gwen Stefani at a "Remember the Dance Hall crashers" Karaoke Party. Actually I like it... Ever heard of Josie Kreuzer? Well, slow her down, get her a great lyricist, and this is you. I do think that the vocalist is stronger in her lower register... I enjoyed..." <br><code>- justanotherstar  (Oceanside, Ca/Santa Fe, Nm)</code>
                            */}
                          </font>
                        </b>
                      </td>
                    </tr>
                    </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </blockquote>
        </center>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
