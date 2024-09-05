import arrow from "../arrow";

const LastName = ({ showLast, order, handleSortBy }: any) => {
  const [ArrowDown, ArrowUp] = arrow;
  return showLast ? (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("lastName")}
    >
      Last Name {order ? <ArrowDown /> : <ArrowUp />}
    </button>
  ) : (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("lastName")}
    >
      Last Name
    </button>
  );
};

export default LastName;
