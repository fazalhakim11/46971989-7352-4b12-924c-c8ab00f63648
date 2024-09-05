import EmployeeForm from "./employees/employeeForm";
import useGetEmployees from "@/hooks/useGetEmployees";
import useHandleData from "@/hooks/useHandleData";

const TableBody = () => {
  const {
    isShow,
    handleFormSubmit,
    handleDelete,
    handleEdit,
    isEdited,
    formData,
    handleChange,
    handleSaveEdit,
  } = useHandleData();

  const { employees, data, page, pageSize, sort, orderData, getData } =
    useGetEmployees();

  return (
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
              <button onClick={() => handleEdit(em.id)}>{em.firstName}</button>
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
              <button onClick={() => handleEdit(em.id)}>{em.lastName}</button>
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
              <button onClick={() => handleEdit(em.id)}>{em.position}</button>
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
              <button onClick={() => handleEdit(em.id)}>{em.phone}</button>
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
              <button onClick={() => handleEdit(em.id)}>{em.email}</button>
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
  );
};

export default TableBody;
