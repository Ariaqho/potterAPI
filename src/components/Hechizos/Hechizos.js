import {useEffect, useState} from 'react';

function Listado_hechizos(){
   const url = 'https://fedeperin-harry-potter-api.herokuapp.com/hechizos'
const [todos, setTodos] = useState()
const llamado_api = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    console.log(responseJSON)
}
useEffect(() => {
    llamado_api()
}, [])
return(
    console.log('Hi')
);
}

export default Listado_hechizos;




