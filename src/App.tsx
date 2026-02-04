import { useEffect, useState } from "react";
import type { User } from "./types/user";
import UserForm from "./components/userForm";
import { createUser, deleteUser, getUsers, updateUser } from "./api/userApi";
import UserList from "./components/userList";


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
    if (editingUser?.id) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await createUser(data);
    }
    loadUsers();
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>

      <UserForm
        onSubmit={handleSubmit}
        defaultValues={editingUser || undefined}
      />

      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
