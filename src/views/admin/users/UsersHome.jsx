import React from 'react'

import { Card } from '../../../components/admin/Card'

import { getUsers } from "../../../api";

const titles = ['Status', 'Nombre', 'Email', 'Rol']
const Home = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers()
      .then((resp) => resp.json())
      .then((resp) => {
        setUsers(resp);
      });
  }, []);

  return (
    <div className="users">
      <Card
        type='usuario'
        titles={titles}
        rows={users}
      >
        
      </Card>
    </div>
  )
}

export default Home
