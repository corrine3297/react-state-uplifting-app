import React, { useEffect, useState } from 'react'

function Header({setAccessUserName}) {
    const [userName, setUserName] = useState('corrine')
    
    //passing the state to the props function
    setAccessUserName(userName)

    // if data is passed dynamically  example
    // get the value from an input field
    // we use useEffect

    // useEffect(()=>{
    //     setAccessUserName(userName)
    // },[])

    return (
        <div style={{ backgroundColor: 'lavender', padding: '30px' }}>
            UserName :{userName}
        </div>
    )
}

export default Header