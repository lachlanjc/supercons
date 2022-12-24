import styles from '../styles/bg.module.css'

// Adapted from https://pudding.cool/2020/12/judge-my-spotify/
const BG = () => (
  <div aria-hidden className={styles.gradientWrapper}>
    <div className={styles.gradientOverlay} />
    <div className={styles.gradient}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1024"
        fill="none"
      >
        <circle cx={-164} cy={-136} r={677} fill="#622aff" />
        <circle cx={1658} cy={-104} r={677} fill="#e635ce" />
        <circle cx={588} cy={579} r={677} fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1={588}
            y1={-98}
            x2={588}
            y2={1256}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6bf" />
            <stop offset={1} stopColor="#2997ff" />
          </linearGradient>
        </defs>
        <circle cx={1349} cy={1189} r={677} fill="#f56300" />
      </svg>
    </div>
  </div>
)

export default BG
