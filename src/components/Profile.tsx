import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fqcj4-1.fna.fbcdn.net/v/t1.0-9/75336358_2383107948684894_3216883225704005632_n.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=7NG0l-h6BngAX_gV3pL&_nc_ht=scontent.fqcj4-1.fna&oh=03f790f76662f5e095f003fe84a3f38c&oe=60629F02" alt=""/>
      <div>
          <strong>Marcelo Francisco</strong>
          
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level 1
          </p>
      </div>
    </div>
  )
}