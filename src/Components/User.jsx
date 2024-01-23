import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data';





const User = () => {
    const params = useParams();

  console.log('params:', params.brand)
    
  
    return (
      <div>
        <div> User id : {params.brand}</div>
    </div>
  )
}

export default User
