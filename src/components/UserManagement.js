import React, { useState } from "react";
import { addUser, deleteUser } from "../services/mockApi";

const UserManagement = ({ users, setUsers }) => {
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("");

    const handleAddUser = () => {
        const newUser = { id: users.length + 1, name: userName, role: role };
        setUsers(addUser(newUser));
        setUserName("");
        setRole("");
    };

    const handleDeleteUser = (userId) => {
        setUsers(deleteUser(userId));
    };

    return (
        <div>
            <h2>User Management</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
            />
            <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Assign role"
            />
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.role}{" "}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
