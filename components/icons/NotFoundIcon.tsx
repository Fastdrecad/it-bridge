function NotFoundIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto my-8"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15103E" />
          <stop offset="100%" stopColor="#A0C943" />
        </linearGradient>
      </defs>

      {/* Background circles */}
      <circle cx="250" cy="250" r="200" fill="white" opacity="0.1" />
      <circle cx="250" cy="250" r="150" fill="white" opacity="0.2" />

      {/* Numbers */}
      <path
        d="M155 170H185V300H155V170Z"
        fill="url(#gradient)"
        className="drop-shadow-lg"
      />
      <path
        d="M205 170C205 170 245 170 265 170C285 170 305 190 305 210C305 230 285 250 265 250C245 250 205 250 205 250V300H175V210C175 190 185 170 205 170Z"
        fill="url(#gradient)"
        className="drop-shadow-lg"
      />
      <path
        d="M325 170H355V300H325V170Z"
        fill="url(#gradient)"
        className="drop-shadow-lg"
      />

      {/* Lost page illustration */}
      <rect
        x="200"
        y="340"
        width="100"
        height="80"
        rx="5"
        fill="white"
        stroke="#15103E"
        strokeWidth="2"
      />
      <path d="M210 350H290" stroke="#15103E" strokeWidth="2" />
      <path d="M210 360H260" stroke="#15103E" strokeWidth="2" />
      <path d="M210 370H270" stroke="#15103E" strokeWidth="2" />
      <path d="M210 380H250" stroke="#15103E" strokeWidth="2" />

      {/* Magnifying glass */}
      <circle
        cx="170"
        cy="370"
        r="25"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
      />
      <path
        d="M190 390L210 410"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Connection lines */}
      <path
        d="M250 280V330"
        stroke="#15103E"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
    </svg>
  );
}

export default NotFoundIcon;
