const USERS_KEY = "users";

const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const setUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = (user) => {
  const users = getUsers();
  users.push(user);
  setUsers(users);
};

export const login = (email, password) => {
  const users = getUsers();
  return users.find((u) => u.email === email && u.password === password);
};
