import React, { useEffect, useState } from 'react'

const FormComponent = ({setFullName,setUsername: setPropUsername}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [toggle, useToggle] = useState(false)
    const [age, setAge] = useState(0)

    const [isSubmitted, setIsSubmitted] = useState(false)


    useEffect(() => {
        console.log('this is called')
        setFullName(firstName + ' ' + lastName)
        setPropUsername(username)
        
      }, [isSubmitted]) 



    const handleSubmit = (event) => {
        event.preventDefault()//to control the behavior
        setIsSubmitted(true)
        alert('Your application is submitted ')
      }


    return (
        <form>
            <label>First Name: </label>
            {/* uncontrolled input */}
            {/* <input onChange={(value) => console.log(value)} /> */}
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} /> {/*Controled input Letter by letter*/}
            <br />
            <label>Last Name: </label>
            <input type='text' value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <br />
            <label>Username: </label>
             <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
            <br />
            <label>Enter Age*:</label>
            <input type='number' value={age} onChange={(event) => setAge(event.target.value)} />
            <br />
            <label>ValidEmail: </label>
            <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <br />
            <label>Password*: </label>
            <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <label>RepeatPass: </label>
            <input type='password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
            <button onClick={(event) => handleSubmit(event)} type='submit'>  Submit </button>
        </form>
    )
}

export default FormComponent