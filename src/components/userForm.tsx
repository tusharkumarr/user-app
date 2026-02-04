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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };
  const validate = () => {
    const newErrors: any = {};

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          {errors[field.name] && (
            <p style={{ color: "red", margin: "4px 0" }}>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <button type="submit">
        {defaultValues ? "Update User" : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;