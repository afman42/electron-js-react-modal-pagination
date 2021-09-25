import React, { useEffect } from 'react'
import fakeJSON from './api'

function App() {
    useEffect(() => {
    fakeJSON()
    },[])
    
    return (
        <div>
            <h1>Hello World EveryOne</h1>
        </div>
    )
}

export default App
