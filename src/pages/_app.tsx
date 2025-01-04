import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/soulharvest.module.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Soul Harvest - Ottawa Band from the early 2000's</title>
        <link rel="icon" href={`/favicon.png`} />
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <meta name="Author" content="Jason St-Cyr" />
      </Head>

      <div className={styles.container}>
      <main className={styles.main}>
        <center>
          <blockquote>
            <table cellSpacing="0" cellPadding="3" width="85%">
              <tbody>
                <tr style={{verticalAlign: 'middle'}}>
                  <td style={{backgroundColor:"#76A7CB", fontSize:"+1"}} >
                      <b>Soul Harvest</b>
                  </td>
                  <td className={styles.header} style={{backgroundColor:"#76A7CB", fontSize:"+1", textAlign:"right"}}  >
                    <b>
                      <a href="mailto:soulharvest@soulharvest.ca">soulharvest<span style={{fontSize:"+1", color:"#FFFF99"}}>@</span>soulharvest.ca</a>
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>

            <table style={{border:"0"}} cellSpacing="0" cellPadding="3" width="85%"><tbody>
              <tr style={{verticalAlign: 'top'}}>
                <td width="150" className={styles.menu}>
                  <img src="/pics/2000/Band-Line_Jason_s.jpg" width="100" height="100" alt="soulharvest.ca" /><br />
                  <br />
                  <a href="/">
                    <img key="home" src="/graphics/home_off.gif" height="25" width="75" alt="Main - News and Reviews" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/home_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/home_off.gif")}
                    />
                  </a><br />
                  <a href="/bio">
                    <img key="bio" src="/graphics/bio_off.gif" height="25" width="75" alt="Band Presskit and Biography" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/bio_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/bio_off.gif")}
                    />
                  </a><br />
                  <a href="/gigs/">
                    <img key="gigs" src="/graphics/gigs_off.gif" height="25" width="75" alt="Upcoming and Previous shows" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/gigs_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/gigs_off.gif")}
                    />
                  </a><br />
                  <a href="/music/">
                    <img key="clips" src="/graphics/clips_off.gif" height="25" width="75" alt="Music clips, full downloads, and tabs" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/clips_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/clips_off.gif")}
                    />
                  </a><br />
                  <a href="/pics/">
                    <img key="pics" src="/graphics/pics_off.gif" height="25" width="75" alt="Photo Gallery!" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/pics_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/pics_off.gif")}
                    />
                  </a><br />
                  <a href="/band">
                    <img key="band" src="/graphics/band_off.gif" height="25" width="75" alt="Band Members" 
                      onMouseOver={e => (e.currentTarget.src="/graphics/band_on.gif")}
                      onMouseOut={e => (e.currentTarget.src="/graphics/band_off.gif")}
                    />
                  </a><br />
                  <a href="/booking.shtml">
                    <img key="booking" src="/graphics/booking_off.gif" height="25" width="75" alt="Booking Information" 
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
                <td className="soulharvest">
                    <Component {...pageProps} />
                </td>
              </tr>
            </tbody></table>
          </blockquote>
        </center>
      </main>


    </div>


      
    </>
  );
};

export default MyApp;