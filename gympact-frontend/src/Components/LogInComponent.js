import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/actions'


export default function LogInComponent() {

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);
    
        function handleChange(event) {
            setValue(event.target.value)
        }
        return [value, handleChange]
    }
    const dispatch = useDispatch();
    const [userName,setUserName] = useInput("")
    const [userPassword, setUserPassword] = useInput("")

    const submitHandler = e =>{
        e.preventDefault()
        const loginObj = {
            username: userName,
            password: userPassword
        }

        dispatch(setUser(loginObj))
    }

    return (
        <div>
            <h1>LogIn Component</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Username" name="username" value={userName} onChange={setUserName} />
                <input type="password" placeholder="Password" name="password" value={userPassword} onChange={setUserPassword} />
                <button>Submit</button>
            </form>
        </div>
    )
}

// function mdp(dispatch){
//     return(
//         {
//             user:(userObj) => dispatch(setUser(userObj))
//         }
//     )
// }
