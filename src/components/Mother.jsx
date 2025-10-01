import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Mother() {
    const { user, user2, frutas, isOpen, setIsOpen } = useContext(UserContext)

    return (
        <div>Mother - {user.name} {user.lastname} {user2.name} {user2.lastname}
            {console.log(isOpen)}
            <div>{
                frutas.map(fruta => <p>{fruta}</p>)
            }
            </div>
            <button onClick={() => { setIsOpen(!isOpen) }}>Cambiar</button>
        </div>
    )
}
