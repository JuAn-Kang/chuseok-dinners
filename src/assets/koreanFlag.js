export const FlagComponent = ({ theme }) => {
  const accentColor = theme === "dark" ? "#80653b" : "#d1a660";
  const subColor = theme === "dark" ? "#212e23" : "#f3dfac";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="450"
      height="300"
      viewBox="-36 -24 72 48"
    >
      <path fill={subColor} d="M-36-24h72v48h-72z" />
      <g id="A" transform="rotate(303.69)">
        <path
          id="B"
          d="M-6-25H6m-12 3H6m-12 3H6"
          stroke={accentColor}
          stroke-width="2"
        />
        <use href="#B" y="44" />
      </g>
      <path stroke={subColor} d="M14.145 9.43l8.321 5.547" />
      <circle
        fill={subColor}
        r="12"
        cx="0"
        cy="0"
        transform="rotate(303.69)"
        stroke={accentColor}
        stroke-width=".48"
      />
      <path
        d="M-9.985-6.656A6 6 0 0 0 0 0a6 6 0 0 1 9.985 6.656A12 12 0 0 1-9.985-6.656z"
        fill={accentColor}
      />
      <g transform="rotate(236.31)">
        <use href="#A" transform="rotate(56.31)" />
        <path stroke={subColor} d="M0-23.5v3M0 17v3.5m0 3v3" />
      </g>
    </svg>
  );
};
