import React, { useState, useEffect } from "react";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";
import { getUsers, getRoles, getPermissions } from "./services/mockApi";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
    setRoles(getRoles());
    setPermissions(getPermissions());
  }, []);

  return (
    <div className="app-container">
      <h1>RBAC Admin Dashboard</h1>

      <UserManagement users={users} setUsers={setUsers} />
      <RoleManagement roles={roles} setRoles={setRoles} />
      <PermissionManagement permissions={permissions} setPermissions={setPermissions} />
    </div>
  );
}

export default App;

