import React, { useState } from "react";
import { addRole, deleteRole } from "../services/mockApi";

const RoleManagement = ({ roles, setRoles }) => {
    const [roleName, setRoleName] = useState("");

    const handleAddRole = () => {
        const newRole = { id: roles.length + 1, name: roleName };
        setRoles(addRole(newRole));
        setRoleName("");
    };

    const handleDeleteRole = (roleId) => {
        setRoles(deleteRole(roleId));
    };

    return (
        <div>
            <h2>Role Management</h2>
            <input
                type="text"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="Enter role name"
            />
            <button onClick={handleAddRole}>Add Role</button>
            <ul>
                {roles.map((role) => (
                    <li key={role.id}>
                        {role.name}{" "}
                        <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleManagement;


