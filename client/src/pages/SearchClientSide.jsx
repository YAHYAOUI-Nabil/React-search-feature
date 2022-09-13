import React, { useState, useEffect } from 'react'
// import {Users} from '../data/Users'
import axios from 'axios'


const SearchClientSide = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [users, setUsers] = useState([])
    const keys = ["first_name", "last_name", "email"];

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const search = (data) => {
            return data.filter((item) =>
              keys.some((key) => item[key].toLowerCase().includes(searchQuery))
            );
          };

    useEffect(() => {
      const fn = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api')
            setUsers(res.data)
        }catch(error){
            console.log(error)
        }
      }
      fn()
    }, [])
    
    return(
        <div style={{display: 'flex',flexDirection: 'column', gap:'4vh', padding:'2rem', justifyContent: 'center'}}>
            <div>
                <input type='text' placeholder='search' onChange={handleChange} />
            </div>
            <div style={{display: 'block', justifyContent: 'right'}}>
                <div>
                <table style={{display: 'block', width:'40vw', margin:'auto'}}>
                    <thead>
                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {search(users).map((item) => (
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default SearchClientSide