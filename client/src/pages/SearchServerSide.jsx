import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SearchServerSide = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
      const fn = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api?query=${searchQuery}`)
            setUsers(res.data)
        }catch(error){
            console.log(error)
        }
      }
      if(searchQuery.length===0 || searchQuery.length>2) {
        fn()
      }
    }, [searchQuery])

    return(
        <div style={{display: 'flex',flexDirection: 'column', gap:'4vh', padding:'2rem', justifyContent: 'center'}}>
            <div>
                <input type='text' placeholder='search' onChange={handleChange} />
            </div>
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
                        {users.map((item) => (
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
    )
}

export default SearchServerSide