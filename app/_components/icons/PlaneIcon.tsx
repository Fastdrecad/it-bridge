function PlaneIcon({ width = 342, className = "" }) {
  return (
    <svg
      width={width}
      height="219"
      viewBox="0 0 342 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="scale(-1, 1) translate(-342, 0)">
        <path
          d="M1.5 1.5L117.5 167L155.726 112.5M1.5 1.5L242.5 42.5L188.5 78M1.5 1.5L168 95M1.5 1.5C63 27 186.5 78 188.5 78M168 95L188.5 137.5M168 95L155.726 112.5M188.5 137.5V78M188.5 137.5L155.726 112.5M197.5 175C222.167 197.333 285.4 235.6 341 210M252.5 142C269.333 149.833 309.4 158.1 335 128.5"
          stroke="black"
        />
      </g>
    </svg>
  );
}

export default PlaneIcon;
