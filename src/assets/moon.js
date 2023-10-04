export const Moon = ({ theme }) => {
  const color = theme === "dark" ? "#80653b" : "#d1a660";

  return (
    <svg
      class="icon fill-current stroke-2 text-gray-800"
      width="16"
      height="16"
      viewBox="0 0 192 200"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 145C74.9442 145 113 106.944 113 60C113 36.6153 103.557 15.4362 88.2757 0.068069C89.5116 0.0228225 90.7531 0 92 0C147.228 0 192 44.7715 192 100C192 155.228 147.228 200 92 200C51.1723 200 16.0592 175.533 0.523712 140.461C9.1425 143.403 18.3848 145 28 145Z"></path>
    </svg>
  );
};
