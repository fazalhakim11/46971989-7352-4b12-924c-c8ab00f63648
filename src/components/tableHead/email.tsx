import arrow from "../arrow";

const Email = ({ email, order, handleSortBy }: any) => {
  const [ArrowDown, ArrowUp] = arrow;
  return email ? (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("email")}
    >
      Email {order ? <ArrowDown /> : <ArrowUp />}
    </button>
  ) : (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("email")}
    >
      Email
    </button>
  );
};

export default Email;
