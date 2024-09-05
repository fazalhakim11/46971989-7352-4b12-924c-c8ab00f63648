import arrow from "../arrow";

const Position = ({ position, order, handleSortBy }: any) => {
  const [ArrowDown, ArrowUp] = arrow;
  return position ? (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("position")}
    >
      Position {order ? <ArrowDown /> : <ArrowUp />}
    </button>
  ) : (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("position")}
    >
      Position
    </button>
  );
};

export default Position;
