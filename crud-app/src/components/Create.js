import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userSalice'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [user, setuser] = useState({})

    const dipatch = useDispatch()
    const navigate = useNavigate()

    const handlechange = (e) => {


        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user)

    }


    const handlesubmit = (e) => {
        e.preventDefault()
        console.log('user...', user)

        dipatch(createUser(user))
        navigate('/read')



    }

    return (
        <div>
            <h2 className='my-2'>fill the data</h2>
            <form className='w-50 mx-auto' >
                <div class="mb-3">
                    <label>Name</label>
                    <input type="email" name='name' onChange={handlechange}></input>

                </div>
                <div class="mb-3">
                    <label>Email</label>
                    <input type="password" name='email' onChange={handlechange} ></input>
                </div>
                <div class="mb-3">
                    <label >Age</label>
                    <input type="password" name='age' onChange={handlechange} ></input>
                </div>
                <div class="mb-3">
                    <input class="form-check-input" name='gender' type="checkbox" value='Male' onChange={handlechange}  ></input>
                    <label>male</label>

                </div>
                <div class="mb-3">

                    <input class="form-check-input" name='gender' type="checkbox" value='Female' onChange={handlechange} checked></input>
                    <label>female</label>

                </div>

                <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Create