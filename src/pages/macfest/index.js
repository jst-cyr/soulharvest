import Head from 'next/head';
import styles from '../../styles/soulharvest.module.css';

export default function MacFEST() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - MacFEST 2001</title>
      </Head>
    
      <h1>MacFEST 2001</h1>
      <div className={styles.row}>
        <h3>MACFEST HAS BEEN CANCELLED UNTIL FURTHER NOTICE</h3>
        <blockquote>
            The annual Ottawa benefit concert known as MacFEST is in its planning stages yet again.
            <br /><br />
            Planned for the long weekend in August, this year's concert promises to be bigger and better than all those that have passed before.
            <br /><br />
            <ul>
              <li><a href="2001.html">MacFEST 2001</a><br />
                  Information on this year's benefit concert.<br /><br /></li>
              <li><a href="corporate.html">Sponsor MacFEST</a><br />
                  Submit corporate information to apply to sponsor MacFEST 2001.<br /><br /></li>
              <li><a href="prize.html">Prize package</a><br />
                  The prize package for the winner of the Bear's on-air MacFEST band contest.<br /><br /></li>
              <li><a href="play.html">Play at MacFEST</a><br />
                  Submit band information to apply for a position in MacFEST 2001.<br /><br /></li>
              <li><a href="2000.html">MacFEST 2000</a><br />
                  Information on last year's benefit concert.<br /><br /></li>
              <li><a href="mailto:soulharvest@ottawa.com">soulharvest@ottawa.com</a><br />
                  Request more information concerning MacFEST.<br /><br /></li>
            </ul>
        </blockquote>
      </div>
    </div>
  )
}
