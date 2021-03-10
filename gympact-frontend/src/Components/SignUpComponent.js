import React,{useState} from 'react'
import url from '../GlobalVar/global'


function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(event) {
        setValue(event.target.value)
    }
    return [value, handleChange]
}

export default function SignUpComponent(){

    const [userName,setUserName] = useInput("")
    const [userEmail,setUserEmail] = useInput("")
    const [userPassword,setUserPassword] = useInput("")
    const [userFirstName, setUserFirstName] = useInput("")
    const [userLastName, setUserLastName] = useInput("")
    
    
    const submitHandler = e =>{
        e.preventDefault()
        
        const userObj = {
            first_name: userFirstName,
            last_name: userLastName,
            email: userEmail,
            username: userName,
            password: userPassword
        }

        fetch(`${url}users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({user: userObj})
        })
        .then(response => {
             if(!response.ok) throw response
             return response.json()
            })
        .then(data => console.log(data))
        
        .catch(error => {
            console.log("registration errors", error)
        });
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
           
                <h1>SignUp Component</h1>
                <input type="text" placeholder="First Name" name="firstname" value={userFirstName} onChange={setUserFirstName}></input>
                <input type="text" placeholder="Last Name" name="lastname" value={userLastName} onChange={setUserLastName}></input>
                <input type="text" placeholder="Email" name="email" value={userEmail} onChange={setUserEmail}></input>
                <input type="text" placeholder="Username" name="username" value={userName} onChange={setUserName}></input>
                <input type="text" placeholder="Password" name="password" value={userPassword} onChange={setUserPassword}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}