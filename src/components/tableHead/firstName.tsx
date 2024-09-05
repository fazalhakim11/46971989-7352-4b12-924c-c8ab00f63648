import arrow from "../arrow";

const FirstName = ({ showFirst, order, handleSortBy }: any) => {
  const [ArrowDown, ArrowUp] = arrow;
  return showFirst ? (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("firstName")}
    >
      First Name {order ? <ArrowDown /> : <ArrowUp />}
    </button>
  ) : (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("firstName")}
    >
      First Name
    </button>
  );
};

export default FirstName;
