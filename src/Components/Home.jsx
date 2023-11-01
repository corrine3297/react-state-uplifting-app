import React, { useState } from 'react'

function Home({ accessUserName }) {

    return (
        <div style={{ backgroundColor: 'lightcyan', height: '80vh' }}>
            Home component
            {/* username from sibbling header component which is obtained from parent app component */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                User name:  {accessUserName}
            </div>
        </div>
    )
}

export default Home