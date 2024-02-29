import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import { getAllUser } from '../../api/get';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
  padding:'1rem'
};

const AppContent = () => {
// const [list, setList] = useState([])

// useEffect(() => {
//     getAllUser()
//       .then(res => setList(res)) // Устанавливаем полученный список в состояние
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

  return (
<Layout.Content style={contentStyle}>
  <div>
  <h2>User List:</h2>
        {/* <ul>
          {list.map((user, index) => (
            <li key={index}>{user.name}</li> // Предположим, что объект пользователя имеет свойство name
          ))}
        </ul> */}
  </div>
</Layout.Content>
  )
}

export default AppContent