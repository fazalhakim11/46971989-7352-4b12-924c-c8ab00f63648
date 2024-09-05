import { useDispatch } from "react-redux";

import { setPage } from "@/stores/slices/pageSlice";

const Pagination = ({ total, pages, page }: any) => {
  const dispatch = useDispatch();

  const handlePrev = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNext = async () => {
    if (page < Math.ceil(total / pages)) {
      dispatch(setPage(page + 1));
    }
  };

  const employeesPerPage = () => {
    if (page === Math.ceil(total / pages)) {
      return total % pages;
    } else return pages;
  };

  return (
    <>
      <p className="text-center mt-2">
        Employees {employeesPerPage()}/{total}
      </p>
      <div className="flex justify-center gap-2">
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <p>
          Page {page}/{Math.ceil(total / pages)}
        </p>
        <button
          onClick={handleNext}
          disabled={page === Math.ceil(total / pages)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
