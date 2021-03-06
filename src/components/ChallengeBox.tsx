import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';
export function ChallengeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return(
    <div className={styles.challengBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe {activeChallenge.amount} de XP
          </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengFailedButton} onClick={resetChallenge}>Falhei</button>
            <button type="button" className={styles.challengSucceedButton}>Completei</button>
          </footer>
        </div>
      ) :
      (
        <div className={styles.challengeNotActive}>
        <strong>
          Finalize um ciclo para receber um desafio.
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </div> 
      )  
    }
    </div>
  );
}