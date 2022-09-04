import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.length === 0 ? s.error : s.done // need to fix with (?:)

    return (
        <div className={s.div}>
            <div className={s.marginLeft}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span className={s.textError}>{error}</span>
            </div>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
