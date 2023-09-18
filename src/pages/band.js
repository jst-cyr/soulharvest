import Head from 'next/head';
import styles from '../styles/soulharvest.module.css';

export default function Band() {
  return (
    <div>
      <Head>
        <title>Soul Harvest - Band Members</title>
      </Head>
    
      <h1>Band Members</h1>
      <div className={styles.row}>
        <a href="/pics/2000/Jason-serious.jpg"><img src="/pics/2000/Jason-serious_s.jpg" align="left" hspace="5" vspace="5" height="100" width="100" alt="Jason St-Cyr" /></a>
        <tt><font color="#33CCFF">GUITAR/VOCALS: Jason St-Cyr</font></tt>
        <p><font face="arial,helvetica,verdana" size="-1">Born into the servitude of a cruel world, Jason's "terrible" childhood life as part of a suburban upper-middle class family which provided him with food, shelter, good moral upbringing, and genuine manners led him to be the sorrow-stricken man known by his band-mates today.  Plagued by genius and amazing looks, this Software Engineer spends his time at pool halls and blues bars enjoying the finer points of life and a Scotch or two.</font></p>
      </div>
      <div className={styles.row}>
        <a href="/pics/2000/Ryan1.jpg"><img src="/pics/2000/Ryan1_s.jpg" align="left"  hspace="5" vspace="5" height="100" width="100" alt="Ryan Lindsay" /></a>
        <tt><font color="#33CCFF">GUITAR/VOCALS: Ryan Lindsay</font></tt>
        <p><font face="arial,helvetica,verdana" size="-1">The younger of the guitar duo has made his mark with his flamboyant appearance and general upbeat attitude, much to the delight of fans and band-mates alike.  His musicianship, heavily rooted in his rock influences, belies his age and shows the promise of a future guitar great.  Having returned to Ottawa to learn Radio Broadcasting at Algonquin College, the young man has had the time to practice and start taking over some of the lead vocal responsibilities in the band.</font></p>
      </div>
      <div className={styles.row}>
        <a href="/pics/2003/marc_bw.jpg"><img src="/pics/2003/marc_bw_s.jpg" align="left" width="100" height="100" alt="Marc Paquette" hspace="5" vspace="5" /></a>
        <tt><font color="#33CCFF">BASS: Marc Paquette</font></tt>
        <p><font face="arial,helvetica,verdana" size="-1">The newest member to the Soul Harvest lineup, Marc is a converted guitarist who is working hard to get into shape for performing alongside his new bandmates.</font></p>
      </div>
      <div className={styles.row}>
        <a href="/pics/2000/Chris2000b.jpg"><img src="/pics/2000/Chris2000b_s.jpg" align="left"  hspace="5" vspace="5" alt="Chris Amos" height="100" width="100" /></a>
        <tt><font color="#33CCFF">DRUMS: Chris Amos</font></tt>
        <p><font face="arial,helvetica,verdana" size="-1">The former infantry member, and current Algonquin Computer Networking student, Soul Harvest's drummer Chris had never been behind a set before joining the band.  Now an indispensable part of the band's music, Chris won't let you buy him a beer but throw him on a dance floor and watch those limbs fly.  The frenetic Amos blames society for his irresistable urge to slay and destroy all those "poor little demons and goblins on the screen", but says: "I'm getting help. Don't worry. I'm fine.  Really".</font></p>
      </div>
    </div>
  )
}
