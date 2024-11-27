import React from "react";

const PermissionManagement = ({ permissions, setPermissions }) => {
  const handleTogglePermission = (permissionId) => {
    setPermissions((prevPermissions) =>
      prevPermissions.map((permission) =>
        permission.id === permissionId
          ? { ...permission, active: !permission.active }
          : permission
      )
    );
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>
            <label>
              <input
                type="checkbox"
                checked={permission.active}
                onChange={() => handleTogglePermission(permission.id)}
              />
              {permission.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
