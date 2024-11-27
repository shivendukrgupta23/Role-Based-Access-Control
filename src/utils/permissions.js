export const roles = {
    ADMIN: "admin",
    EDITOR: "editor",
    VIEWER: "viewer",
  };
  
  export const permissions = {
    CREATE: "create",
    READ: "read",
    UPDATE: "update",
    DELETE: "delete",
  };
  
  export const rolePermissions = {
    admin: [permissions.CREATE, permissions.READ, permissions.UPDATE, permissions.DELETE],
    editor: [permissions.READ, permissions.UPDATE],
    viewer: [permissions.READ],
  };
  
  export const hasPermission = (role, permission) => {
    return rolePermissions[role]?.includes(permission) || false;
  };
  