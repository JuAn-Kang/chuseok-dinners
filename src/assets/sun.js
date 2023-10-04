export const Sun = ({ theme }) => {
  const color = theme === "dark" ? "#80653b" : "#d1a660";

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="12" fill={color} />
      <circle cx="21" cy="3" r="3" fill={color} />
      <circle cx="21" cy="39" r="3" fill={color} />
      <circle cx="34" cy="34" r="3" fill={color} />
      <circle cx="8" cy="8" r="3" fill={color} />
      <circle cx="8" cy="34" r="3" fill={color} />
      <circle cx="34" cy="8" r="3" fill={color} />
      <circle cx="3" cy="21" r="3" fill={color} />
      <circle cx="39" cy="21" r="3" fill={color} />
    </svg>
  );
};
