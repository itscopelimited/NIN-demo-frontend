import React,{useEffect} from 'react'
import NIMClogo from './img/nimc.png'

function Profile({data}) {
    useEffect(() => {
        sessionStorage.setItem('__browser_data', `${data.token}`)
    })
    return (
        <>
          <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
          <h5>User Profile</h5>  
          <p>{data.data.user.firstName} {data.data.user.lastName}</p>
          <p>{data.data.user.email}</p>
          <p>{data.data.user.phone}</p>
        </>
    )
}

export default Profile
