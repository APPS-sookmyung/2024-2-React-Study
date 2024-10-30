import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [person, setPerson] = useState({
        firstName: "찰스",
        lastName: "김",
        email: "charleskim0304@gmail.com",
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value,
        });
    }
    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value,
        });
    }
    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value,
        });
    }

  return (
    <div style={{ display:'flex', flexDirection:'column' }}>
        <label>
            이름:
            <input value={person.firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
            성:
            <input value={person.lastName} onChange={handleLastNameChange} />
        </label>
        <label>
            이메일:
            <input value={person.email} onChange={handleEmailChange} />
        </label>
        <span>{person.firstName} {person.lastName}  {person.email}</span>
    </div>
  )
}
