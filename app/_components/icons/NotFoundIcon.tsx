function NotFoundIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="600"
      viewBox="0 0 800 600"
      fill="none"
    >
      <path
        d="M400 450C460.228 450 510 400.228 510 340C510 279.772 460.228 230 400 230C339.772 230 290 279.772 290 340C290 400.228 339.772 450 400 450Z"
        fill="white"
      />
      <rect x="350" y="310" width="100" height="40" rx="20" fill="#F47373" />
      <rect x="370" y="270" width="60" height="70" fill="#F47373" />
      <path d="M390 330V340" stroke="#F7D9D9" stroke-width="4" />
      <path d="M410 330V340" stroke="#F7D9D9" stroke-width="4" />
      <path
        d="M377 310C377 307.239 379.239 305 382 305H418C420.761 305 423 307.239 423 310V320C423 322.761 420.761 325 418 325H382C379.239 325 377 322.761 377 320V310Z"
        fill="#C73832"
      />
      <rect x="305" y="410" width="190" height="20" fill="#C4C4C4" />
      <rect x="355" y="430" width="90" height="10" fill="#C4C4C4" />
      {/* <text
        fill="black"
        font-family="Verdana"
        font-size="24"
        font-weight="bold"
        x="250"
        y="220"
      >
        404: Page Not Found
      </text> */}
    </svg>
  );
}

export default NotFoundIcon;
