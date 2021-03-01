import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperinceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/components/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
          
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <ExperienceBar />

      <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      
      <div>
        <ChallengeBox />
      </div>

    </section>
    </div>
  )
}
