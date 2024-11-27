export const getUsers = () => [
    { id: 1, name: "John Doe", role: "admin" },
    { id: 2, name: "Jane Smith", role: "editor" },
];

export const addUser = (newUser) => {
    const users = getUsers();
    users.push(newUser);
    return users;
};

export const deleteUser = (userId) => {
    return getUsers().filter((user) => user.id !== userId);
};

export const getRoles = () => [
    { id: 1, name: "admin" },
    { id: 2, name: "editor" },
    { id: 3, name: "viewer" },
];

export const addRole = (newRole) => {
    const roles = getRoles();
    roles.push(newRole);
    return roles;
};

export const deleteRole = (roleId) => {
    return getRoles().filter((role) => role.id !== roleId);
};

export const getPermissions = () => [
    { id: 1, name: "read", active: true },
    { id: 2, name: "write", active: false },
    { id: 3, name: "delete", active: false },
];
