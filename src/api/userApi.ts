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


