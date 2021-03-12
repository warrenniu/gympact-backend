import React, { useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { createGroup } from '../Redux/actions'

export default function GroupContainer() {

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value)
        }
        return [value, handleChange]
    }

    const [isForm, setIsForm] = useState(false)
    const [groupName, setGroupName] = useInput("")
    const [groupWager, setGroupWager] = useInput(0)
    const [groupWeeks, setGroupWeeks] = useInput(0)
    const getUserId = useSelector(state => state.user.id)
    const dispatch = useDispatch();
    console.log("AAAAAAA",getUserId)
    const toggleForm = () => {
        setIsForm(true)
    }
    
    const createGroupHandler = (e) =>{
        e.preventDefault()

        const groupObj ={
            name: groupName,
            pot: 0,
            wager: groupWager,
            weeks: groupWeeks
        }
        dispatch(createGroup(groupObj,getUserId))
    }

    //fetch -> group, wait repsonse, fetch -> membership user_id, usergroup_id,admin: true, balance
    return (
        <div>
            <h1>Group Container</h1>
            <button onClick={toggleForm}>Create Group</button>

            {isForm ? <form onSubmit={createGroupHandler}>
                <label>Group Name</label>
                <input type="text" name="groupName" value={groupName} onChange={setGroupName}/>
                <label>Wager</label>
                <input type="number" name="wager" value={groupWager} onChange={setGroupWager}/>
                <label>Total Weeks</label>
                <input type="number" name="weeks" value={groupWeeks} onChange={setGroupWeeks} />
                <button>Create Group</button>
            </form> : null}
        </div>
    )
}