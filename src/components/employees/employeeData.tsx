"use client";
import { useEffect } from "react";
import Pagination from "../pagination";
import useGetEmployees from "@/hooks/useGetEmployees";
import TableHead from "../tableHead/tableHead";
import TableBody from "../tableBody";

const EmployeeData = () => {
  const { employees, data, page, pageSize, sort, orderData, getData } =
    useGetEmployees();

  useEffect(() => {
    getData();
  }, [page, sort, orderData]);

  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
      <Pagination page={page} total={data.totalEmployees} pages={pageSize} />
    </div>
  );
};

export default EmployeeData;
