import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import useGetEmployees from "./useGetEmployees";
import { shows } from "@/stores/slices/isShowSlice";
import { setSortBy } from "@/stores/slices/sortBySlice";
import { setOrder } from "@/stores/slices/orderSlice";

const useHandleData = () => {
  const { employees, data, page, pageSize, sort, orderData, getData } =
    useGetEmployees();
  const isShow = useSelector((state: any) => state.isShow.isShow);
  const dispatch = useDispatch();

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch("/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        dispatch(setSortBy("createdAt"))
        dispatch(setOrder("desc"))
        getData();
        dispatch(shows());
        alert("Employee created successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${JSON.parse(errorData.error)[0].message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this employee?")) return;

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Employee deleted successfully");
        getData();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const [isEdited, setIsEdited] = useState(null);
  const [formData, setFormData] = useState<formData>([]);

  const handleEdit = (id: any) => {
    setIsEdited(id);
    const data = employees.filter((data: any) => data.id === id);
    setFormData(data);
  };
  const handleChange = (event: any) => {
    setFormData((state: any) => ({
      ...state,
      [0]: {
        ...state[0],
        [event.target.name]: event.target.value,
      },
    }));
  };
  const handleSaveEdit = async (id: any) => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData[0]),
      });

      if (response.ok) {
        alert("Employee updated successfully");
        getData();
        setIsEdited(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${JSON.parse(errorData.error)[0].message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };
  return {
    isShow,
    handleFormSubmit,
    handleDelete,
    handleEdit,
    isEdited,
    formData,
    handleChange,
    handleSaveEdit,
  };
};

export default useHandleData;
