"use client";
import { useEffect, useState } from "react";
import EmployeeForm from "./employeeForm";
import { useDispatch } from "react-redux";
import { shows } from "@/stores/slices/isShowSlice";

const EmployeeData = ({ isShow }: any) => {
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
        alert("Employee created successfully!");
        getData();
        dispatch(shows());
        // Handle successful creation (e.g., redirect or clear form)
      } else {
        const errorData = await response.json();
        alert(`Error: ${JSON.parse(errorData.error)[0].message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const [employees, setEmployees] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("api/employees?sortOrder=desc");
      const data = await res.json();
      setEmployees(data.employees);
      console.log(data.employees);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this employee?")) return;

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Employee deleted successfully");
        getData(); // Call a function to refresh the employee list
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
          "Content-Type": "application/json", // Set this if sending JSON data
        },
        body: JSON.stringify(formData[0]),
      });

      if (response.ok) {
        alert("Employee updated successfully");
        getData(); // Call a function to refresh the employee list
      } else {
        const errorData = await response.json();
        alert(`Error: ${JSON.parse(errorData.error)[0].message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
    setIsEdited(null);
  };
  console.log("formdata", formData[0]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="w-[213px]">First Name</th>
            <th className="w-[213px]">Last Name</th>
            <th className="w-[213px]">Position</th>
            <th className="w-[213px]">Phone Number</th>
            <th className="w-[213px]">Email</th>
          </tr>
        </thead>
        <tbody>
          {isShow && <EmployeeForm onSubmit={handleFormSubmit} />}
          {employees.map((em: any) => (
            <tr key={em.id}>
              <td className="text-center">
                {isEdited === em.id ? (
                  <input
                    className="text-center"
                    type="text"
                    name="firstName"
                    value={formData[0].firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                ) : (
                  <button onClick={() => handleEdit(em.id)}>
                    {em.firstName}
                  </button>
                )}
              </td>
              <td className="text-center">
                {isEdited === em.id ? (
                  <input
                    className="text-center"
                    type="text"
                    name="lastName"
                    value={formData[0].lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                ) : (
                  <button onClick={() => handleEdit(em.id)}>
                    {em.lastName}
                  </button>
                )}
              </td>
              <td className="text-center">
              {isEdited === em.id ? (
                  <input
                    className="text-center"
                    type="text"
                    name="position"
                    value={formData[0].position}
                    onChange={handleChange}
                    placeholder="Position"
                    required
                  />
                ) : (
                  <button onClick={() => handleEdit(em.id)}>
                    {em.position}
                  </button>
                )}
              </td>
              <td className="text-center">
              {isEdited === em.id ? (
                  <input
                    className="text-center"
                    type="number"
                    name="phone"
                    value={formData[0].phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                  />
                ) : (
                  <button onClick={() => handleEdit(em.id)}>
                    {em.phone}
                  </button>
                )}
              </td>
              <td className="text-center">
              {isEdited === em.id ? (
                  <input
                    className="text-center"
                    type="email"
                    name="email"
                    value={formData[0].email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                ) : (
                  <button onClick={() => handleEdit(em.id)}>
                    {em.email}
                  </button>
                )}
              </td>
              {isEdited === em.id ? (
                <button onClick={() => handleSaveEdit(em.id)}>Save</button>
              ) : (
                <button onClick={() => handleDelete(em.id)}>Delete</button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeData;
