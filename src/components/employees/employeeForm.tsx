"use client";
import { useState } from "react";

const EmployeeForm = ({ onSubmit, initialData }: any) => {
  const [formData, setFormData] = useState(
    initialData || {
      firstName: "",
      lastName: "",
      position: "",
      phone: "",
      email: "",
    }
  );

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    onSubmit(formData);
  };

  return (
    <tr>
      <td>
        <input
          className="text-center"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </td>
      <td>
        <input
          className="text-center"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </td>
      <td>
        <input
          className="text-center"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          required
        />
      </td>
      <td>
        <input
          className="text-center"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
      </td>
      <td>
        <input
          className="text-center"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Save</button>
      </td>
    </tr>
  );
};

export default EmployeeForm;
