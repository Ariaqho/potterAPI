import {useEffect, useState} from 'react';

function Spells_list(){
   const url = 'https://fedeperin-harry-potter-api.herokuapp.com/hechizos'
const [todos, setTodos] = useState()
const api_call = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    console.log(responseJSON)
}
useEffect(() => {
    api_call()
}, [])
return(
    console.log('Hi')
);
}

export default Spells_list;




