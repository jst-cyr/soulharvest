import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function Hiatus() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - ON HIATUS</title>
      </Head>
    
      <h1>ON HIATUS</h1>

      <iframe src="/hiatus/thanks.html" name="thanks" width="400" height="500" align="right">
        Your browser does not support IFRAMES.
      </iframe>
      <blockquote>
        <h2>soulharvest.ca - on hiatus</h2>
        In October of 2004, Ryan Lindsay departed the band to pursue his radio career in the lovely town of Timmins, Ontario.  Rather then try to find another vocalist to step in for the irreplaceable Mr. Lindsay, Soul Harvest has decided to close its doors for the time being and pursue other musical projects.  If/when Ryan Lindsay can return home, Soul Harvest will once again welcome him back with open arms and continue the wonderful times we've had playing in Ottawa.
        <br /><br />
        It's been a blast, with good times and good friends.  We hope we brought a little bit of entertainment into your lives while we explored a variety of musical interests under the Soul Harvest name.  A recording was made of the last Soul Harvest show, and we hope to be able to get a few tracks from it onto the website soon.
        <br /><br />
        You can catch Chris Amos and Jason St-Cyr playing with local Ottawa rockers <a href="http://www.twelve34.ca" target="_blank">twelve34</a>.  Marc Paquette, currently musical director at CKDJ, is also pursuing some interesting side projects.  Look for more from him in the future.
        <br /><br />
        <center>
          <h3><a href="/">CONTINUE TO soulharvest.ca</a></h3>
          <img src="/graphics/promo/soulharvest_promo_large.jpg" width="800"/>
        </center>
      </blockquote>
    </div>
  )
}
