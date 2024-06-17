import React, { useState } from 'react'
import './App.css'

function App() {
    const [name,setName]= useState('Sophia');
    const [newName, setNewName]= useState('');
 
    const changeName =(TeacherName) => {
        setName(TeacherName)
    };

    return (
        <div>
       <h2>Teachers Name :{name}</h2>
       <ul>
        <li onClick= {()=>changeName('Data')}>Data</li>
        <li onClick={()=>changeName('Reyes')}>Reyes</li>
        <li onClick={()=>changeName('Yolanda')}>Yolanda</li>
       </ul>
        </div>
        
    )
}

export default App
