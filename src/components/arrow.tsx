const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
      />
    </svg>
  );
};

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
      />
    </svg>
  );
};

export default [ArrowDown, ArrowUp];
