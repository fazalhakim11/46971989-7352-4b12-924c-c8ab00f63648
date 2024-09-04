"use client"
import { useEffect, useState } from "react";
import EmployeeForm from "./employeeForm";

const EmployeeData = ({ isShow }:any) => {
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
        getData()
        // Handle successful creation (e.g., redirect or clear form)
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error[0]}`);
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
    if (!confirm('Are you sure you want to delete this employee?')) return;

    try {
        const response = await fetch(`/api/employees/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Employee deleted successfully');
            getData(); // Call a function to refresh the employee list
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
};

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
            {
                isShow && <EmployeeForm onSubmit={handleFormSubmit} />
            }
        
          {employees.map((em: any) => (
            <tr key={em.id}>
              <td className="text-center">{em.firstName}</td>
              <td className="text-center">{em.lastName}</td>
              <td className="text-center">{em.position}</td>
              <td className="text-center">{em.phone}</td>
              <td className="text-center">{em.email}</td>
              <button onClick={()=>handleDelete(em.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeData;
