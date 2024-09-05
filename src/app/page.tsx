"use client";
import { useDispatch } from "react-redux";

import EmployeeData from "@/components/employees/employeeData";
import { shows } from "@/stores/slices/isShowSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center mt-24 overflow-x-auto min-w-72">
      <div className="self-end me-24">
        <button
          className="me-10 bg-[#4b576e] py-1 px-2 rounded-lg text-white"
          onClick={() => dispatch(shows())}
        >
          Add Data
        </button>
      </div>
      <EmployeeData />
    </main>
  );
}
