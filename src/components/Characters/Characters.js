import {useEffect, useState} from 'react';

function FetchCharacters(){
  const urlPersonajes = "https://harry-potter-api-production.up.railway.app/personajes";
  const [todos, setTodos] = useState()
  const llamado_api = async () => {
    const response = await fetch(urlPersonajes)
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

export default FetchCharacters;




