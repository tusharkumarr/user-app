import type { User } from "../types/user";

let users: User[] = [
  {
    id: "1",
    firstName: "Tushar",
    lastName: "Kumar",
    phone: "9876543210",
    email: "tushar@gmail.com"
  }
];

export const getUsers = async (): Promise<User[]> => {
  return users;
};

export const createUser = async (data: User): Promise<User> => {
  const newUser = { ...data, id: Date.now().toString() };
  users = [...users, newUser];
  return newUser;
};

export const updateUser = async (
  id: string,
  data: User
): Promise<User> => {
  users = users.map(user =>
    user.id === id ? { ...data, id } : user
  );
  return { ...data, id };
};

export const deleteUser = async (id: string): Promise<void> => {
  users = users.filter(user => user.id !== id);
};

