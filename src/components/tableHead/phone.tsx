import arrow from "../arrow";

const Phone = ({ phone, order, handleSortBy }: any) => {
  const [ArrowDown, ArrowUp] = arrow;
  return phone ? (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("phone")}
    >
      Phone {order ? <ArrowDown /> : <ArrowUp />}
    </button>
  ) : (
    <button
      id="1"
      className="flex mx-auto"
      onClick={() => handleSortBy("phone")}
    >
      Phone
    </button>
  );
};

export default Phone;
