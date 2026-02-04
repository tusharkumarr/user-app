import { useEffect, useState } from "react";
import { userFormSchema } from "../schemas/userFormSchema";
import type { User } from "../types/user";
import "./UserForm.css";

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
  const [errors, setErrors] = useState<any>({});

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
    setErrors({});
  }, [defaultValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: User) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      {userFormSchema.map(field => (
        <div key={field.name} className="form-row">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.label}
            required={field.required}
          />
          {errors[field.name] && (
            <span className="error">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <button type="submit" className="submit-btn">
        {defaultValues ? "Update User" : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;
