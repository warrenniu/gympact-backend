import actionTypes from './actionTypes'
import url from '../GlobalVar/global'
import {useSelector} from 'react-redux'

export function setUser(userObj){
    return function (dispatch){
        fetch(`${url}login`,{
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
        .then(data => 
            {
               dispatch({type: actionTypes.setUser, payload: data.user})
            }
        
            )
        
        .catch(error => {
            console.log("registration errors", error)
        });
    }
}

export async function createGroup(groupObj,userId){
    return async function(dispatch){
    const response = await fetch(`${url}usergroups`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify(groupObj)
    })
        const data = await response.json()
        createMembership(data.group_id,userId)

      
}
}

 function createMembership(groupData,userId){

    return function(dispatch){
    const membershipObj = {
        user_id: userId,
        group_id: groupData,
        admin: true,
        balance: 0
    }
     //fetch membership
     fetch(`${url}memberships`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify(membershipObj)
    })
    .then(response => response.json())
    .then(data => console.log(data))
 }   
}