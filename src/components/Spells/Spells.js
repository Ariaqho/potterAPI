import {useEffect, useState} from 'react';

function SpellsList(){
   const url = 'https://fedeperin-harry-potter-api.herokuapp.com/hechizos'
const [todos, setTodos] = useState()
const apiCall = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    console.log(responseJSON)
}
useEffect(() => {
    apiCall()
}, [])
return(
    console.log('Hi')
);
}

export default SpellsList;




