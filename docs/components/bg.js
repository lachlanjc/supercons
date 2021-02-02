// Adapted from https://pudding.cool/2020/12/judge-my-spotify/
const BG = () => (
  <div aria-hidden className="gradient-wrapper">
    <div className="gradient-overlay" />
    <div className="gradient">
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
    <style jsx>{`
      .gradient-wrapper {
        position: fixed;
        pointer-events: none;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
      }

      .gradient-overlay {
        height: 100%;
        width: 100%;
        backdrop-filter: saturate(200%) blur(24px);
        background-color: rgba(255, 255, 255, 0.875);
        z-index: 10000;
      }

      @media (prefers-color-scheme: dark) {
        .gradient-overlay {
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: saturate(150%) blur(32px);
        }
      }

      .gradient {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      .gradient svg {
        height: 100%;
        width: 100%;
        z-index: -1;
        position: relative;
      }
    `}</style>
  </div>
)

export default BG
