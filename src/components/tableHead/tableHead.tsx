import useHandleSortBy from "@/hooks/useHandleSortBy";
import FirstName from "./firstName";
import LastName from "./lastName";
import Position from "./position";
import Phone from "./phone";
import Email from "./email";

const TableHead = () => {
  const {
    sortBy,
    order,
    showFirst,
    showLast,
    showPosition,
    showPhone,
    showEmail,
    handleSortBy,
  } = useHandleSortBy();
  return (
    <thead>
      <tr>
        <th className="w-[213px]">
          <FirstName
            showFirst={showFirst}
            order={order}
            handleSortBy={handleSortBy}
          />
        </th>
        <th className="w-[213px]">
          <LastName
            showLast={showLast}
            order={order}
            handleSortBy={handleSortBy}
          />
        </th>
        <th className="w-[213px]">
          <Position
            position={showPosition}
            order={order}
            handleSortBy={handleSortBy}
          />
        </th>
        <th className="w-[213px]">
          <Phone phone={showPhone} order={order} handleSortBy={handleSortBy} />
        </th>
        <th className="w-[213px]">
          <Email email={showEmail} order={order} handleSortBy={handleSortBy} />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
