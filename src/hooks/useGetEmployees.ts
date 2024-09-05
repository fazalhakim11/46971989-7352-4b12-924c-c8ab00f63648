import { useDispatch, useSelector } from "react-redux";

import { setData } from "@/stores/slices/dataSlice";
import { setEmployees } from "@/stores/slices/employeesSlice";
import { setPage } from "@/stores/slices/pageSlice";

const useGetEmployees = () => {
  const employees = useSelector((state: any) => state.employees.employees);
  const data = useSelector((state: any) => state.data.data);
  const page = useSelector((state: any) => state.page.page);
  const pageSize = useSelector((state: any) => state.pageSize.pageSize);
  const sort = useSelector((state: any) => state.sortBy.sortBy);
  const orderData = useSelector((state: any) => state.order.order);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await fetch(
        `api/employees?sortBy=${sort}&sortOrder=${orderData}&page=${page}&pageSize=${pageSize}`
      );
      const data = await res.json();
      dispatch(setEmployees(data.employees));
      dispatch(setData(data));
      dispatch(setPage(data.page));
      console.log(data.employees);
    } catch (error) {
      console.log(error);
    }
  };
  return { employees, data, page, pageSize, sort, orderData, getData };
};

export default useGetEmployees;
