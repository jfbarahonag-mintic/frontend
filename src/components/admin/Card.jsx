import React from "react";

import { CustomTable } from './CustomTable'

const users = [
  {
    status: 'active',
    nombre: 'Juan Perez',
    email: 'mail@example.com',
    role: 'role',
  },
  {
    status: 'active',
    nombre: 'Juan Perez',
    email: 'mail@example.com',
    role: 'role',
  },
  {
    status: 'inactive',
    nombre: 'Juan Perez',
    email: 'mail@example.com',
    role: 'role',
  },
  {
    status: 'inactive',
    nombre: 'Juan Perez',
    email: 'mail@example.com',
    role: 'role',
  },
  {
    status: 'inactive',
    nombre: 'Juan Perez',
    email: 'mail@example.com',
    role: 'role',
  },
]

//TODO: Rename this Component
function Card({ children }) {
  const columns = ['Status', 'Nombre', 'Email', 'Rol']
  return (
    <div style={{color: 'red'}}>
      <CustomTable
        titles={columns}
        rows={users}
      />
    </div>
  );
}

export { Card };
