import { useEffect, useState } from "react";
import type { User } from "./types/user";
import UserForm from "./components/userForm";
import { createUser, getUsers } from "./api/userApi";


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data: User) => {
    let res = await getUsers();
    console.log(res);
    if (editingUser?.id) {
      setEditingUser(null);
    } else {
      createUser(data);
    }
    loadUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>

      <UserForm
        onSubmit={handleSubmit}
      />

    </div>
  );
}

export default App;
