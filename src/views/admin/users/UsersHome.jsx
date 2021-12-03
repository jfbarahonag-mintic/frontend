import React from 'react'

import { Card } from '../../../components/admin/Card'

const columns = ["Status", "Nombre", "Email", "Rol"];
const users = [
  {
    status: "active",
    nombre: "Juan Perez",
    email: "mail@example.com",
    role: "role",
  },
  {
    status: "active",
    nombre: "Juan Perez",
    email: "mail@example.com",
    role: "role",
  },
  {
    status: "inactive",
    nombre: "Juan Perez",
    email: "mail@example.com",
    role: "role",
  },
  {
    status: "inactive",
    nombre: "Juan Perez",
    email: "mail@example.com",
    role: "role",
  },
  {
    status: "inactive",
    nombre: "Juan Perez",
    email: "mail@example.com",
    role: "role",
  },
];

const Home = () => {
  return (
    <div className="users">
      <Card
        type='usuario'
        titles={columns}
        rows={users}
      />
    </div>
  )
}

export default Home
