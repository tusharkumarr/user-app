import { useEffect, useState } from "react";
import { userFormSchema } from "../schemas/userFormSchema";
import type { User } from "../types/user";

const UserForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: any) => void;
  defaultValues?: any;
}) => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (defaultValues) {
      setFormData(defaultValues);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    }
  }, [defaultValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: User) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {userFormSchema.map(field => (
        <div key={field.name} style={{ marginBottom: "10px" }}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.label}
            required={field.required}
          />
        </div>
      ))}

      <button type="submit">
        {defaultValues ? "Update User" : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;