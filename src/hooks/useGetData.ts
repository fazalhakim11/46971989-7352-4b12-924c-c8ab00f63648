import { useDispatch, useSelector } from "react-redux";

import { setEmployees } from "@/stores/slices/employeesSlice";
import { setOrder } from "@/stores/slices/orderSlice";
import { setSortBy } from "@/stores/slices/sortBySlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector((state: any) => state.pageSize.pageSize);
  const page = useSelector((state: any) => state.page.page);

  const sortBy = async (sortBy: any, order: any) => {
    try {
      const res = await fetch(
        `api/employees?sortBy=${sortBy}&sortOrder=${order}&page=${page}&pageSize=${pageSize}`
      );
      const data = await res.json();
      dispatch(setEmployees(data.employees));
      dispatch(setSortBy(sortBy));
      dispatch(setOrder(order));
      console.log(data.employees);
    } catch (error) {
      console.log(error);
    }
  };

  const goToPage = () => {
    alert("Clicked!");
  };
  return { sortBy, goToPage };
};

export default useFetch;
